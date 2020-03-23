<template>
  <div class="home">
      我是home组件
      <!-- <Tree></Tree> -->
  </div>
</template>

<script>
import Tree from '../../components/tree/index'
export default {
  name: 'home',
  components:{
    Tree
  },
  mounted(){
    console.log(this.$route.matched);
    // console.log(window.location.hash.slice(1));
    
  },
  watch:{
    $route(){
      console.log(this.$route.matched);
      
    }
  }
}
</script>
<style scoped>

</style>