<template>
  <div>
      <button @click="log">click</button>
      <son></son>
      <button @click="show=!show">toggle</button>
      <transition name="fade">
          <p v-show="show">我会变</p>
      </transition>
  </div>
</template>

<script>
import son from './components/son';
export default {
    name:'home',
    components:{
        son
    },
    data(){
        return{
            show:true
        }
    },
    methods:{
        log(){
            console.log('hhh');
        }
        
    },
    provide:function (){
        return{
            log:this.log
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>