<template>
    <div>
        this is pageA
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next){
        console.log('before route enter')
        next()
    },
    beforeRouteUpdate(to,from,next){
        console.log('before route update')
        next()
    },
    beforeRouteLeave(to,from,next){
        console.log('before route leave')
        next()
    }
}
</script>

<style>

</style>