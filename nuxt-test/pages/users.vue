<template>
   <div>
       users公有用户导航

       <br><br>
       
       <nuxt-child></nuxt-child>     <!-- 相当于router-view -->

       <br><br>

       <!-- {{foo.bar}} -->      <!--打开测试错误页面-->

       <br><br>

       <ul>
          users公有用户列表：
          <li v-for="user in users" :key="user.id">{{user.name}}</li>
        </ul>
   </div>
</template>

<script>
function getUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{ name: "tom", id: 1 }, { name: "jerry", id: 2 }]);
      }, 1500);
    });
}

export default {
    layout:'users',
    async asyncData() {
        console.log(process.server);
        
        // 使用async/await
        const users = await getUsers();
        // return的数据最终回合data中的合并
        return { users };
    }
}
</script>

<style>

</style>