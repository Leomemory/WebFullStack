<template>
    <div>
        <h4>vuex page </h4>
        <p>
            <button @click="minus">-</button>
            {{$store.state.count}}
            <button @click="add">+</button>
        </p>
        <p>
            getters值{{money}}
        </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods:{
        // add(){
        //     this.$store.dispatch('increment')
        // },
        // minus(){
        //     this.$store.dispatch('decrement')
        // },
        ...mapActions({
            add:'increment',
            minus: 'decrement'
        })
    },
    computed:{
        money(){
            return this.$store.getters.money
        }
    }
}
</script>

<style scoped>

</style>