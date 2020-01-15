//对loader.js的封装
const koa = require("koa");
const {initRouter, initController, initService, initSchedule, loadConfig} = require("./loader");
class kLoader {
    constructor(conf) {
        this.$app = new koa(conf);
        loadConfig(this);//先加载配置项
        this.$ctrl = initController(this); // 先初始化控制器，路由对它有依赖
        this.$service = initService(this);
        initSchedule()   // 初始化定时任务
        this.$router = initRouter(this);  //// 将kkb实例传进去
        this.$app.use(this.$router.routes());
    }
    start(port) {
        this.$app.listen(port, () => {
            console.log("服务器启动成功，端口" + port);
        });
    }
}
module.exports = kLoader;
