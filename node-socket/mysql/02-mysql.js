const mysql = require("mysql");
// 连接配置
const cfg = {
  host: "localhost",
  user: "root", 
  password: "SHA25634", // 修改为你的密码
  database: "quanzhan1" // 请确保数据库存在
};
// 创建连接对象
const conn = mysql.createConnection(cfg);

// 连接
conn.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log("连接成功！");
  }
});

conn.end(); // 若query语句有嵌套，则end需在此执行