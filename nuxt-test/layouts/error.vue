<template>
   <div class="template">
       <h1 v-if="error.statusCode == 404">页面不存在</h1>
       <h1 v-else-if="error.statusCode == 400">{{error.message}}</h1>
       <h1 v-else>运用发生错误异常</h1>
       <nuxt-link to="/">首页</nuxt-link>
   </div>
</template>

<script>
export default {
    props:['error']
}
</script>

<style>

</style>