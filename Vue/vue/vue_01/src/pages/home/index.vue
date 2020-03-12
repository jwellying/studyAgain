<template>
  <div>
      <div>我是home</div>
      <div>{{msg}}</div>
      <button @click="call">call news</button>
  </div>
</template>

<script>
export default {
    props:{
        msg:String
    },
    methods:{
        call(){
            this.$emit('callNews');
        }
    }
}
</script>

<style>

</style>