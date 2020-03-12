<template>
  <div id="app">
      <router-link to='/home'>主页</router-link>
      <router-link to='/news'>新闻</router-link>
      <router-view/>
  </div>
</template>

<script>
// import mixin from './mixin'
export default {
  name:'App',
  // mixins:[mixin]
  
}
</script>
<style>

</style>
