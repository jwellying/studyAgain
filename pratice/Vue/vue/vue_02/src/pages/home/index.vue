<template>
  <div>
      <div>我是home</div>
      <button @click="callNews" ref='btn'>call news</button>
  </div>
</template>

<script>
import Bus from '../../eventBus'
export default {
    created(){
        Bus.$on('callH',()=>{
            console.log("home收到");
            
        })
    },
    methods:{
        callNews(){
            Bus.$emit('callN');
        }
    }
}
</script>

<style>

</style>