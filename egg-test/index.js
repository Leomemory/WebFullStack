// const app = new (require('koa'))()
// const {initRouter} = require('./loader')
// app.use(initRouter().routes());
// app.listen(3000)


const kL = require('./k-loader')
const app = new kL()
app.start(3000)