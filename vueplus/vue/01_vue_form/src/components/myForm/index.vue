<template>
    <Form :model='model' :rules='rules' ref='loginForm'>
        <FormItem label='用户名' prop='username'>
            <FormInput v-model='model.username' type='text'></FormInput>
        </FormItem>
        <FormItem label='用户密码' prop='password'>
            <FormInput v-model='model.password' type='password'></FormInput>
        </FormItem>
        <FormItem>
            <button @click='login'>登录</button>
        </FormItem>
        {{model}}
    </Form>
  
</template>

<script>
import FormInput from './FormInput'
import FormItem from './FormItem'
import Form from './Form'
import pop from '../popUp/index'
import create from '@/utils/create'
export default {
    data(){
        return {
            model:{
                username:'jack',
                password:''
            },
            rules:{
                username:[{required:true,message:'用户名必填'}],
                password:[{required:true,message:'密码必填'}]
            }
        }
    },
    components:{
        FormInput,
        FormItem,
        Form
    },
    methods:{
        login(){
            
            this.$refs.loginForm.validate((vali)=>{
                if(vali){
                    // console.log('登录成功');
                    // 使用自定义的弹窗
                    let notice = create(pop,{
                        title:'tip',
                        message:'登录成功',
                        duration:2000
                    })
                    notice.show();
                    
                }else{
                    console.log('登录失败');
                    let notice = create(pop,{
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

<style>

</style>