import Vue from 'vue'
import Router from 'vue-router'
import ShopCart from '@/pages/ShopCart'
import Elements from '@/pages/Elements'
import pageA from '@/pages/Routerpage/pageA'
import pageB from '@/pages/Routerpage/pageB'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
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
    }
  ]
})
