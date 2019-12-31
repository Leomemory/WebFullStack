<template>
  <div id="app">
    <h2>
      <router-link to="/shopcart">购物车</router-link> &nbsp;&nbsp;
      <router-link to="/elements">组件化设计</router-link> &nbsp;&nbsp;
      <router-link :to="{name:'pageA'}">PageA</router-link> &nbsp;&nbsp;
      <router-link to="/pageb">PageB</router-link> &nbsp;&nbsp;
      <router-link to="/pagevuex">VuexPage</router-link> &nbsp;&nbsp;
      <router-link to="/modules">VuexPageModules</router-link> &nbsp;&nbsp;
      
    </h2>
    <router-view/>
    <router-view name="divid"/> <!--设置router.js中components控制router-view不同显示 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
