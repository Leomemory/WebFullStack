<template>
  <div id="app">
    <router-link :to="{name:'pageA'}">PageA</router-link>
    <router-link to="/pageb">PageB</router-link>
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
