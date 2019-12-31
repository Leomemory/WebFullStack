<template>
   <div>
       Login Page
       <br><br>
       <cube-form    
            :model="model"    
            :schema="schema"    
            @submit="handleLogin"    
            @validate="haneldValidate"  
        ></cube-form>
   </div>
</template>

<script>
export default {
    data(){
        return{
            model: {
                username: "",
                passwd: ""
            },
            schema: {
                // 表单结构定义
                fields: [
                // 字段数组
                {
                    type: "input",
                    modelKey: "username",
                    label: "用户名",
                    props: {
                        placeholder: "请输入用户名"
                    },
                    rules: {
                        // 校验规则
                        required: true
                    },
                    trigger: "blur"
                },
                {
                    type: "input",
                    modelKey: "passwd",
                    label: "密码",
                    props: {
                        type: "password",
                        placeholder: "请输入密码",
                        eye: {
                            open: true
                        }
                    },
                    rules: {
                        required: true
                    },
                    trigger: "blur"
                },
                {
                    type: "submit",
                    label: "登录"
                }]
            }
        }
    },
    methods:{
        handleLogin(e){
            // 阻止表单默认提交行为
            e.preventDefault();
        },
        haneldValidate(ret) {
            console.log(ret);
        }
    }
}
</script>

<style>

</style>