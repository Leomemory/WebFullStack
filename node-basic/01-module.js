// 使用 nodemon 调试，更新代码自动刷新

// const newLocal = "hello,node !";
// console.log(newLocal);


const os = require("os");
const mem = os.freemem() / os.totalmem() * 100;
console.log(`内存占用率${mem.toFixed(2)}`);


// const cpuStat = require('cpu-stat');    //需项目初始化，引入cpu-stat查看
// cpuStat.usagePercent((err, percent) => {
//     console.log(`cpu占用率：${percent.toFixed(2)}`);
// });