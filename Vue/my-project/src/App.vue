<template>
  <div id="app">
    <!-- header部分 -->
    <mt-header title="集美MM"></mt-header>
    <!-- tabbar部分 -->
    <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      <img slot="icon" src="../static/img/index.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="hot">
      <img slot="icon" src="../static/img/news.png">
      热点
    </mt-tab-item>
    <mt-tab-item id="shopcart">
      <img slot="icon" src="../static/img/shopcart.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="vip">
      <img slot="icon" src="../static/img/vip.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:'home'
    }
  },
  watch:{
    selected:function(newV,oldV){
      // console.log(newV);
      this.selected = newV;
      this.$router.push({
        name:newV
      })
    }
  }
}
</script>

<style scoped>


</style>
