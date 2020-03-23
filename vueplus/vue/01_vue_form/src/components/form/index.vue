<template>
  <div>
    <div>
      <Form :model='model' :rules='rules' ref='loginForm'>
        <FormItem  prop='username' >
            <!-- v-model实际上也是一个语法糖的实现 -->
            <!-- 通过value和input事件 -->
          <FormInput v-model='model.username' type='text' placeholder="请输入用户名"></FormInput>
        </FormItem>
        <FormItem  prop='password'>
          <FormInput v-model='model.password' type='password' placeholder="请输入密码"></FormInput>
        </FormItem> 
        <FormItem>
            <button @click='login'>登录</button>    
        </FormItem> 
      </Form>
    </div>
  </div>
</template>

<script>
import FormItem from './FormItem'
import Form from './Form'
import FormInput from './FormInput'
import pop from '../popUp/index'
// import create from '@/utils/create'
export default {
    data(){
        return {
            model:{
                username:'',
                password:''
            },
            rules:{
                username:[{required:true,message:'用户名必填'}],
                password:[{required:true,message:'密码必填'}]
            }
        }
    },
    components: {
        FormItem,
        Form,
        FormInput
    },
    methods:{
        login(){
            this.$refs.loginForm.validate((isVali)=>{
                if(isVali){
                    // 使用自定义的弹窗
                    let notice = this.$create(pop,{
                        title:'tip',
                        message:'登录成功',
                        duration:2000
                    })
                    notice.show();
                    setTimeout(()=>{
                        this.$router.push('/home');
                    },2000)
                    
                }else{
                    console.log('登录失败');
                    let notice = this.$create(pop,{
                        title:'tip',
                        message:'登录失败',
                        duration:2000
                    })
                    notice.show();
                }
            })
        }
    }
}
</script>
<style scoped>
button{
    height: 40px;
    width: 250px;
    text-align: center;
    line-height: 40px;
    border: none;
    border-radius: 5px;
    margin: auto;
    color: rgb(26, 25, 25);
    font-size: 18px;
    letter-spacing: 10px;
    outline: none;
}
</style>