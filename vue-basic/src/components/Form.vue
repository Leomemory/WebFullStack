<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide(){
        return {
            kForm: this
        }
    },
    props:{
        model:{
            type:Object,
            required:true
        },
        rules:{
            type:Object
        }
    }
}
</script>

<style>

</style>