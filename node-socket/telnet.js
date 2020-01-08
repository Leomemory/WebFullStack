// 实现一个实时聊天程序
// WebSocket.js

const net = require('net')
const chatServer = net.createServer()
const clientList = []

chatServer.on('connection',client => {
    client.write('Hi!\n')
    clientList.push(client)
    client.on('data',data => {
        console.log('receive:',data.toString())
        clientList.forEach(v => {
            v.write(data)
        })
    })
})
chatServer.listen(9000)



//运行node telnet.js
//分屏运行 telnet localhost 9000