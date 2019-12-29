<template>
    <div>
        this is pageB
        <!-- 动态id: {{this.$route.params.id}} -->
        设置props为true传来的id: {{ id }}
    </div>
</template>

<script>
export default {
    props:['id'],
    mounted(){
        // console.log(this.$route.params.id)
        console.log(this.id)
    }
}
</script>

<style>

</style>