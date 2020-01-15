const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
// 读取指定目录下文件
function load(dir, cb) {
    const url = path.resolve(__dirname, dir);
    const files = fs.readdirSync(url);
    files.forEach(filename => {
        filename = filename.replace(".js", "");
        const file = require(url + "/" + filename);
        cb(filename, file);
    });
}
function initRouter(app) {  // 添加一个参数
    const router = new Router();
    load("routes", (filename, routes) => {
        // 判断路由类型，若为函数需传递app进去
        routes = typeof routes == "function" ? routes(app) : routes;
        const prefix = filename === "index" ? "" : `/${filename}`;
        Object.keys(routes).forEach(key => {
            const [method, path] = key.split(" ");
            console.log(
                `正在映射地址：${method.toLocaleUpperCase()} ${prefix}${path}`
            );
            // router[method](prefix + path, routes[key]);
            router[method](prefix + path, async ctx => { // 抽离service服务，传入ctx
                app.ctx = ctx;
                await routes[key](app);
            });
        });
    });
    return router;
}


function initController() {
    const controllers = {};
    // 读取控制器目录
    load("controller", (filename, controller) => {
        // 添加路由
        controllers[filename] = controller;
    });
    return controllers;
}


function initService(app) {
    const services = {};
    // 读取控制器目录
    load("service", (filename, service) => {
        // 添加路由
        services[filename] = service(app);  // 服务变为函数，传入app
    });
    return services;
}


// 新增loadSchedule函数
const schedule = require("node-schedule");
function initSchedule() {
    // 读取控制器目录
    load("schedule", (filename, scheduleConfig) => {
        schedule.scheduleJob(scheduleConfig.interval, scheduleConfig.handler);
    });
}


//数据库集成
const Sequelize = require("sequelize");
function loadConfig(app) {
    load("config", (filename, conf) => {
        if (conf.db) {
            app.$db = new Sequelize(conf.db);

            // 加载模型
            app.$model = {};
            load("model", (filename, { schema, options }) => {
                app.$model[filename] = app.$db.define(filename, schema, options);
            });
            app.$db.sync();
        }

        // 如果有middleware选项，则按其规定循序应用中间件
        if (conf.middleware) {
            conf.middleware.forEach(mid => {
                const midPath = path.resolve(__dirname, "middleware", mid);
                app.$app.use(require(midPath));
            });
        }
    });
}


module.exports = { initRouter, initController, initService, initSchedule, loadConfig };