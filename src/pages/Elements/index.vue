<template>
   <div class="Elements">
       input自定义组件，如此实现绑定：{{value}}
       <k-input type="text" :value="value" @input="value=arguments[0]"></k-input>
       
       <br>

       formitem如何执行校验，如何知道input状态，如何获取对应的数据模型,这里v-model相当于上面:value和@input效果,form如何进行全局校验
       <k-form :model="model" :rules="rules">
           <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="password">
                <k-input v-model="model.password" type="password"></k-input>
            </k-form-item>
       </k-form>

       <h3>Element表单</h3>    
       <hr>    
       <el-form :model="model" :rules="rules" ref="loginForm">      
           <el-form-item label="用户名" prop="username">
                <el-input v-model="model.username" autocomplete="off"></el-input>      
            </el-form-item>      
            <el-form-item label="确认密码" prop="password">        
                <el-input type="password" v-model="model.password" autocomplete="off"></el-input>      
            </el-form-item>      
            <el-form-item>        
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>      
            </el-form-item>    
        </el-form>
   </div>
</template>

<script>
import KInput from '../../components/Input'
import KFormItem from '../../components/Formitem'
import KForm from '../../components/Form'
export default {
    data(){
        return{
            model: { username: "tom", password: "" },      
            rules: {        
                username: [{ required: true, message: "请输入用户名" },{min: 6,max:10,message:'请输入6~10的用户名'}],        
                password: [{ required: true, message: "请输入密码" }],      
            },

            value:''
        }
    },
    components:{
        KInput,
        KFormItem,
        KForm
    },
    methods:{
        submitForm(form) {          
            this.$refs[form].validate(valid=>{              
                if (valid) {                  
                    alert('请求登录!')              
                } else {                  
                    alert('校验失败！')             
                }          
            })      
        }
    }
}
</script>

<style>

</style>