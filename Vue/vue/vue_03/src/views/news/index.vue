<template>
  <div>
      <p>我是news</p>
      <p>{{this.$store.getters.getNum}}</p>
  </div>
</template>

<script>
export default {
    name:'news',
    created(){
        console.log('news被创建了');
    }
}
</script>

<style>

</style>