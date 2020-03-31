<template>
  <div id="app">
    <!-- 传统的方法的实现 -->
    <!-- <button @click="show">点我input会出现</button> -->
    <!-- 使用自定义指定来实现 -->
    <button @click="isShow=!isShow">点我input会出现</button>
    <!-- <input type="text" name='' v-if="isShow" ref="input" v-focus /> -->
    <home></home>
  </div>
</template>
<script>
import home from './views/home/home'
export default {
  name:'App',
  data(){
    return{
      isShow:false
    }
  },
  mounted(){
    console.log(this.$refs);
  },
  methods:{
    show(){
      // this.isShow = !this.isShow;
      // // 被动态创建的元素需要配合nextTick()使用
      // this.$nextTick(function(){
      //   this.$refs.input.focus();
      // })
    }
  },
  components:{
    home
  }

// bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
// inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
// update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，
// 也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
  // directives:{
  //   focus:{
  //     // bind表示元素被初始化时
  //     // inserted表示元素被插入时
  //     inserted(el,binding){
  //       // el:表示当前绑定的元素
  //       console.log(el);
  //       // binding：一个对象，包含指令的属性
  //       console.log(binding);
        
  //       el.focus();
  //       // console.log(1);
        
  //     }
  //   }
  // }
}
</script>
<style>

</style>

