跨域问题？
1，JSONP(JSON with Padding)，前端+后端方案，绕过跨域
前端构造script标签请求指定URL（由script标签发出的GET请求不受同源策略限制），服务
器返回一个函数执行语句，该函数名称通常由查询参callback的值决定，函数的参数为服务器
返回的json数据。该函数在前端执行后即可获取数据。

2，代理服务器
请求同源服务器，通过该服务器转发请求至目标服务器，得到结果再转发给前端。
前端开发中测试服务器的代理功能就是采用的该解决方案，但是最终发布上线时如果web应
用和接口服务器不在一起仍会跨域。

3，CORS(Cross Origin Resource Share) - 跨域资源共享，后端方案，解决跨域
原理：cors是w3c规范，真正意义上解决跨域问题。它需要服务器对请求进行检查并对响应头做相
应处理，从而允许跨域请求。
具体实现：
1）响应简单请求: 动词为get/post/head，没有自定义请求头，Content-Type是application/xwww-form-urlencoded，multipart/form-data或text/plain之一，通过添加以下响应头解决：res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
2）响应preflight请求，需要响应浏览器发出的options请求（预检请求），并根据情况设置响应头：
res.writeHead(200, {
"Access-Control-Allow-Origin": "http://localhost:3001",
"Access-Control-Allow-Headers": "X-Token,Content-Type",
"Access-Control-Allow-Methods": "PUT"
});
res.end();
3）如果要携带cookie信息，则请求变为credential请求
res.setHeader('Access-Control-Allow-Credentials', 'true');


http2对比http1?
1）多路复用 - 雪碧图、多域名CDN、接口合并
多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息；而HTTP/1.1协议中，浏览器客户
端在同一时间，针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞**
2）首部压缩
http/1.x 的 header 由于 cookie 和 user agent很容易膨胀，而且每次都要重复发送。http/2使用
encoder 来减少需要传输的 header 大小，通讯双方各自 cache一份 header fields 表，既避免了重复
header 的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩 header，减少发送包的数
量从而降低延迟
3）服务端推送
在 HTTP/2 中，服务器可以对客户端的一个请求发送多个响应。举个例子，如果一个请求请求的是
index.html，服务器很可能会同时响应index.html、logo.jpg 以及 css 和 js 文件，因为它知道客户端会
用到这些东西。这相当于在一个 HTML 文档内集合了所有的资源