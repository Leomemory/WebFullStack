module.exports = {
    db:{
        dialect:'mysql',
        host:'localhost',
        database:'test',
        username:'root',
        password:'SHA25634'
    },
    middleware: ['logger'] // 以数组形式，保证执行顺序
}