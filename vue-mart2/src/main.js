// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import interceptor from './interceptor'
import create from './utils/create'

import Cube from 'cube-ui'
Vue.use(Cube)

//动态全局组件设计与实现
import {createAPI} from 'cube-ui'
import CartAnim from '@/components/CartAnim'

Vue.config.productionTip = false

// 给vue注册实例方法，方法名$createCartAnim
createAPI(Vue, CartAnim, ['transitionend'])

Vue.prototype.$create = create;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 执行拦截器初始化
interceptor(app);
