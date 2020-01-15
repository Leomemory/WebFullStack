// 抽取route中业务逻辑至controlle

module.exports = {
    // index: async ctx => {
    //   ctx.body = "ctrl 首页";
    // },
    
    index: async app => { // app已传递
      app.ctx.body = await app.$model.user.findAll()
    },
    detail: ctx => {
      ctx.body = "ctrl 详情页面";
    }
}