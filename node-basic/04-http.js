const http = require('http')
const server = http.createServer((req, res)=>{
    const {url, method} = req;
    console.log('request',url, method)
    res.end('666')
})
server.listen(3000)