<template>
    <div>
        About Page
    </div>
</template>

<script>
export default {
    created(){
        // 获取用户信息
        axios.get('/api/userinfo')
    }
}
</script>

<style>

</style>