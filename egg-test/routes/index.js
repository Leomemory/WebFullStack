// module.exports = {
//     'get /':async ctx=>{
//         ctx.body = '首页'
//     },
//     'get /detail' : ctx=>{
//         ctx.body = '详情页面'
//     }
// }


// 需要传递kkb实例并访问其$ctrl中暴露的控制器
module.exports = app => ({
    "get /": app.$ctrl.home.index,
    "get /detail": app.$ctrl.home.detail
});