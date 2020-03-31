<template>
  <div class="form">
      <slot></slot>
  </div>
</template>

<script>
export default {
    // form组件需要传值给他的后代，再传值是因为我们考虑到隔代传值
    // 可能出现，所以使用provide进行隔代传值
    provide(){
        return {
            // 将当前对象传递出去
            form:this
        }
    },
    props:{
        model:{
            type:Object,
            required:true
        },
        rules:{
            type:Object,
            required:true
        }
    },
    methods:{
        validate(callBack){
            // 接收所有的promise
            const tasks = this.$children
            .filter(item=>item.prop)
            .map(item=>item.validate());
            Promise.all(tasks)
            .then(()=>{callBack(true)})
            .catch(()=>{callBack(false)})
        }
    }
}
</script>

<style scoped>
.form{
    height: 250px;
    width: 300px;
    border-radius: 10px;
    background-color: rgb(236, 236, 227,50%);
    margin: 0 auto;
    position: relative;
    top:150px;
    box-shadow:2px 2px 8px #63acb186;
    padding-top: 20px;
}
</style>