import Vue from 'vue'
import Router from 'vue-router'
// import ShopCart from '@/pages/ShopCart'
import Elements from '@/pages/Elements'
import pageA from '@/pages/Routerpage/pageA'
import pageB from '@/pages/Routerpage/pageB'
import PageVuex from '@/pages/Vuex'
import PageVuexModules from '@/pages/Vuex/modules.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ()=>import('@/pages/ShopCart/index').then(m => m.default)
    },
    {
      path: '/elements',
      name: 'Elements',
      component: Elements
    },
    {
      path: '/pagea',
      name: 'pageA',
      components: {
        default:pageA,
        divid:Elements
      },
      beforeEnter:(to,from,next)=>{
        console.log('beforeEnter',to,from)
        next()
      }
    },
    {
      path: '/pageb',
      name: 'pageB',
      component: pageB
    },
    {
      path: '/pageb/:id',
      props: true,
      component: pageB
    },
    {
      path:'/pagevuex',
      name:'PageVuex',
      component:PageVuex
    },
    {
      path:'/modules',
      name:'PageVuexModules',
      component:PageVuexModules
    }
  ]
})
