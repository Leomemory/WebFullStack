<template>
  <div class="shopcart">
      <h1>{{title}}</h1>
      
      <hr>

      <div>
          <h2>添加课程</h2>
          <div>
              <label for="ktmc">课堂名称：</label>
              <input type="text" name="ktmc" id="ktmc" v-model="courseInfo.name">
          </div>
          <div>
              <label for="ktjg">课程价格：</label>
              <input type="text" name="ktjg" id="ktjg" v-model="courseInfo.price">
          </div>
          <div>
              <button @click="addCourseToList">添加课程到列表</button>
          </div>
      </div>

      <hr>

      <div>
          <h2>课程列表</h2>
          <table>  
              <tr>
                <th>课程名称</th>
                <th>课程价格</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item,index) in courseList" :key="item.id">
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td><button @click="addCourseToCart(index)">添加到购物车</button></td>
              </tr>
          </table>
      </div>

      <hr>

      <cart :courseItem="courseItem" @removeItem="remove"></cart>
  </div>
</template>

<script>
import Cart from '../../components/Cart';
export default {
    data(){
        return{
            title:"购物车",
            courseInfo:{
                name:'',
                price:''
            },
            courseList:[
                {
                    id:0,
                    name:'web全栈开发架构师',
                    price: 9998
                },{
                    id:1,
                    name:'Python人工智能',
                    price: 8888
                }
            ],
            courseItem:[]
        }
    },
    components:{
        Cart
    },
    methods:{
        addCourseToList(){
            this.courseList.push(this.courseInfo)
        },
        addCourseToCart(index){
            let item = this.courseList[index];
            let isHasCourse = this.courseItem.find(x=>x.id == item.id);
            if(isHasCourse){
                isHasCourse.number += 1;
            }else{
                this.courseItem.push({
                    ...item,
                    number:1,
                    isActive: true
                })
            }
        },
        remove(index){
            this.courseItem.splice(index,1)
        }
    }
}
</script>

<style>

</style>