//拦截器
export default function({$axios}){
    //onRequest为请求拦截帮助方法
    $axios.onRequest(config=>{
        config.headers.token = 'jilei'

        //真实应该是下面的方式
        // if(!process.server){
        //     config.headers.token = localStorage.getItem('token')
        // }
    })
}