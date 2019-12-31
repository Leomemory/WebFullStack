import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home";
import Login from "@/views/Login";
import Cart from "@/views/Cart";
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
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
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/about",
      name: "about",
      meta: {
        auth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About")
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.path }
      });
    }
  } else {
    // 不需要登录验证
    next();
  }
});

export default router;