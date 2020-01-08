const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const { url, method,headers } = req
    console.log('request',url,method);
    if (url === '/' && method === 'GET'){
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/pain;charset=utf-8' })
                res.end('服务器错误')
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    }else if(url === '/users' && method ==="GET"){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(JSON.stringify({ a: 123 }))
    }else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream('.' + url).pipe(res)
    }else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('No Page 页面不存在')
    }
})
server.listen(3000)