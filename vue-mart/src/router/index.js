import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'

Vue.use(Router)

const router =  new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta:{
        auth:true
      }
    }
  ]
})

//路由守卫
router.beforeEach((to,from,next)=>{
  // console.log('to',to)
  // console.log('from',from)
  if(to.meta.auth){
    //需要登录
    const token = localStorage.getItem("token");
    if(token){
      next();
    }else{
      next({
        path:'/login',
        query: { redirect:to.path }    //登录成功回调重新请求原来的路径
      })
    }
  }else{
    next();
  }
})

export default router;