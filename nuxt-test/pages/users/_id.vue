<template>
   <div>
       用户id:{{$route.params.id}}
       koa异步请求的数据名称：{{user.name}}
   </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    // 注意返回的就是响应数据
    const data = await $axios.$get(`/api/users/${params.id}`);
    if (data.ok) {
      return { user: data.user };
    }
    error({ statusCode: 400, message: "id有误，查询失败" });
  }
};
</script>
</script>

<style scoped>

</style>