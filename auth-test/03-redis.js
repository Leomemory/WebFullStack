const redis = require('redis')
const client = redis.createClient(6379,'localhost')

client.set('hello','hahaha')
client.get('hello',function(err,v){
    console.log('redis key:',v)
})




// var redis = require('redis');
// var client = redis.createClient(6379, 'localhost');
// // client.auth(123456);  // 如果没有设置密码 是不需要这一步的
// client.on('connect', function () {
//     // set 语法
//     client.set('name', 'long', function (err, data) {
//         console.log(data)
//     })
//    // get 语法
//     client.get('name', function (err, data) {
//         console.log(data)
//     })

//     client.lpush('class',1,function (err,data) {
//         console.log(data)
//     })

//     client.lrange('class',0,-1,function (err,data) {
//         console.log(data)
//     })
// })