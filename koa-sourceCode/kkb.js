const http = require('http')

const context = require("./context");
const request = require("./request");
const response = require("./response");

class KKB{
    constructor() {
        this.middlewares = []
    }
    listen(...args) {
        const server = http.createServer(async (req, res) => {
            // this.callback(req, res)


            // // 创建上下⽂
            // let ctx = this.createContext(req, res);
            // this.callback(ctx)
            // // 响应
            // res.end(ctx.body)


            // 创建上下⽂
            let ctx = this.createContext(req, res);
            // 中间件合并
            const fn = this.compose(this.middlewares)
            await fn(ctx)
            // 响应
            res.end(ctx.body)
        })
        server.listen(...args)
    }
    use(callback) {
        // this.callback = callback

        this.middlewares.push(callback)
    }
    // 构建上下⽂, 把res和req都挂载到ctx之上，并且在ctx.req和ctx.request.req同时保存
    createContext(req, res) {
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
    // 合成函数
    compose(middlewares) {
        return function (ctx) {
            return dispatch(0)
            function dispatch(i) {
                let fn = middlewares[i]
                if (!fn) {
                    return Promise.resolve()
                }
                return Promise.resolve(
                    // fn(middlewares[i +1]
                    fn(ctx, function next() {
                        return dispatch(i + 1)
                    })
                )
            }
        }
    }
}
module.exports = KKB