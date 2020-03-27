<template>
  <div>
      <div>我是home</div>
      <div>{{msg}}</div>
      <button @click="call">call news</button>
      <p ref='test'>{{test}}</p>
  </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            test:"beforeUpdate"
        }
        
    },
    props:{
        msg:String
    },
    methods:{
        call(){
            this.$emit('callNews');
            this.test = 'update'
            console.log(this.$refs.test.innerHTML);
            
        }
    }
}
</script>

<style>

</style>