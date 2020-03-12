<template>
  <div id="app" v-log>
    <div v-focus>我是app组件</div>
    <p ></p>
    <!-- <router-view/> -->
  </div>
</template>
<script>
// import myMixin from './myMixin'
export default {
  name:'app',
  created(){
    console.log('app组件被创建了');
    
  },
  directives:{
    focus:{
        inserted:function(el){
        console.log(el); 
      }
    }
  }
  // mixins:[myMixin]
}
</script>
<style>

</style>
