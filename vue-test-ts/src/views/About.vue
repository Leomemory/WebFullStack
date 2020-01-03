<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Hello msg="ts学习" foo="传匿名参数" @add-feature="onAddFeature" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hello,{Feature} from "@/components/Hello";

@Component({
  components:{
    Hello
  }
})
export default class About extends Vue {
  onAddFeature(feature:Feature){
    console.log(feature.name)
  }
}

</script>

<style lang="stylus" scoped>

</style>
