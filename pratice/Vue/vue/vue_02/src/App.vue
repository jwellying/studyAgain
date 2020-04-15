<template>
  <div>
    <home></home>
    <news></news>
  </div>
</template>

<script>
import home from './pages/home/index'
import news from './pages/news/index'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    home,
    news
  }
}
</script>

<style>

</style>
