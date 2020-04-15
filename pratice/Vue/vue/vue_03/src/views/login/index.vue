<template>
  <div>
      <div class="logo">
          <img src='#'>
      </div>
      <div class="form">
           <input type="text" placeholder="请输入用户名" v-model="userInfo.username">
           <input type="password" placeholder="请输入密码" v-model="userInfo.password">
           <button @click="login">登录</button>
      </div>
     
  </div>
</template>

<script>
import mixin from '../../mixin';
export default {
    name:'login',
    mixins:[mixin],
    data(){
        return{
            userInfo:{
                username:'',
                password:''
            }
            
        }
    },
    methods:{
        login(){
            let {username,password} = this.userInfo;
            console.log(username);
            console.log(password);
            
            if(username&&password){
                localStorage.setItem('user',this.userInfo);
                this.$router.push({path:'/home'});
            }else{
                alert('请输入完整信息')
            }
            
        }
    }
}
</script>

<style scoped>
body{
    background-color: rgb(27, 95, 100);
}
.logo{
    height: 100px;
    line-height: 100px;
    width: 100px;
    text-align: center;
    background-color: cadetblue;
    border-radius: 100%;
    margin: 0 auto;
    position: relative;
    top:100px;

}
.form{
    height: 200px;
    width: 300px;
    /* border: 1px solid #ccc; */
    position: relative;
    top:100px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form input{
    height: 30px;
    width: 250px;
    padding: 2px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: rgb(115, 196, 201);
    font-size: 16px;
}
.form button{
    height: 30px;
    width: 250px;
    padding: 2px 5px;
    border: 1px solid transparent;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: rgb(115, 196, 201);
    font-size: 16px;
    color: white;
    letter-spacing: 10px;
}
</style>