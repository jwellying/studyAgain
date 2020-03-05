<template>
<div>
  <div>{{$store.state.count}}</div>
  <div>{{ getNum }}</div>
  <button @click='handleChange'>add</button>
  <button @click='handleChangeAsync'>addAsync</button>
</div>
</template>

<script>

export default {
  name: 'app',
  // getters方法一般结合computed属性使用
  computed:{
    getNum(){
      return this.$store.getters.getNum;
    }
  },
  methods:{
    // 但是不建议这么书写
    handleChange(){
      this.$store.commit('addNum',10);
    },
    handleChangeAsync(){
      // this.$store.commit('addNumAsync',10);
      this.$store.dispatch('addNumAsync',20)
    }
    
  }
}
</script>

<style>

</style>
