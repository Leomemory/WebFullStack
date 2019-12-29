import Vue from 'vue'
import Router from 'vue-router'
import ShopCart from '@/pages/ShopCart'
import Elements from '@/pages/Elements'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
