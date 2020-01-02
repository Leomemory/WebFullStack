<template>
   <div>
       <p>用户详情ID:{{$route.query.id}}</p>
       <p>用户详情姓名:{{user.name}}</p>
   </div>
</template>

<script>
export default {
  async asyncData({ query, error }) {
        if (query.id) {
            return { user: {name:'tom'} };
        }        
        error({ statusCode: 400, message: '请传递用户id' })
      }
};
</script>
</script>

<style scoped>

</style>