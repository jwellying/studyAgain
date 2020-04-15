<template>
  <div id="app" :style='styleObj'>
    <home :msg='msg' @callNews='call'></home>
    <news @changeFather='change' :show='isShow'></news>
  </div>
</template>

<script>
// 局部组件
import home from './pages/home/index';
import news from './pages/news/index';
export default {
  name: 'app',
  data () {
    return {
      msg:'我是APP的子组件',
      styleObj:{
        color:'red'
      },
      isShow:true
    }
  },
  components:{
    home,
    news
  },
  methods:{
    change(){
      this.styleObj.color = 'blue';
    },
    call(){
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="scss">

</style>
