import Vue from 'vue'
import Router from 'vue-router'
import ShopCart from '@/pages/ShopCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    }
  ]
})
