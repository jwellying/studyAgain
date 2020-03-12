<template>
  <div>
      <p>我是home</p>
      <p>{{this.$store.getters.getNum}}</p>
  </div>
</template>

<script>
export default {
    name:'home',
    created(){
        console.log('home被创建了');
    },
    // beforeRouteEnter(to,from,next){
    //     console.log(to);
    //     if(to.meta.auth){
    //         if(localStorage.getItem('user')){
    //             next();
    //         }else{
    //             next({
    //                     path:'/login'
    //                 })
    //         }
    //     }
    // }
}
</script>

<style>

</style>