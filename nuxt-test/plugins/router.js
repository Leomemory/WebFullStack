//全局路由守卫
export default ({app})=>{
    app.router.beforeEach((to,from,next)=>{
        console.log("我要去:",to.path);
        next();
    })
}
