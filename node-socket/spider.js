// 实战一个爬虫
// 原理：服务端模拟客户端发送请求到目标服务器获取页面内容并解析，获取其中关注部分的数据。
// 已坏不可用

const originRequest = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

function request(url, callback) {
    const options = {
        url: url,
        encoding: null
    };
    originRequest(url,options,callback);
}
for (let i = 100553; i < 100563; i++) {
    const url = `https://www.dy2018.com/i/${i}.html`;
    request(url, function(err, res, body) {
        const html = iconv.decode(body, "gb2312");
        const $ = cheerio.load(html);
        console.log($(".title_all h1").text());
    });
}