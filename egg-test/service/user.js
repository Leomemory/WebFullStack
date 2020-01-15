// 抽离通用逻辑至service文件夹，利于复用

const delay = (data, tick)=> new Promise(resolve=>{
    setTimeout(()=>{
        resolve(data)
    },tick)
})

// 可复用的服务 一个同步，一个异步
module.exports =app => ({   // 变为函数，传入app
    getName() {
       return delay('jerry', 1000)
    },
    getAge(){
        return 20
    }
});