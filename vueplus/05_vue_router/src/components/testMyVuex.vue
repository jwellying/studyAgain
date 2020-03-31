<template>
  <div>
      <h2>testVuex</h2>
      <p>{{$store.state.num}}</p>
      <p>{{$store.getters.getNum}}</p>
      <button @click="add">点我加</button>
      <button @click="addAsync">点我异步加</button>
  </div>
</template>

<script>
export default {
    methods:{
        add(){
            this.$store.commit('add',2);
        },
        async addAsync(){
           const result = await this.$store.dispatch('addAsync');
           if(result.ok===1){
            //    console.log('异步加完成');
            alert('异步加完成');
               
           }
        }
    }
}
</script>

<style>

</style>