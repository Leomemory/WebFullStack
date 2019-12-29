// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//样式文件一定要引入
import App from './App'
import router from './router'
Vue.use(ElementUI);
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
   console.log('beforeEach',to,from)
   next()
})

router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve',to,from)
  next()
})

router.afterEach((to,from)=>{
  console.log('afterEach',to,from)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
