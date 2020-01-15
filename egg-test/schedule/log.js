// 使用Node-schedule来管理定时任务,schedule目录，存放定时任务，使用crontab格式来启动定时
//log.js
module.exports = {
    interval:'*/3 * * * * *',
    handler(){
        console.log('定时任务,三秒执行一次'+ new Date())
    }
}