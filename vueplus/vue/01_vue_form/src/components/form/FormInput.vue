<template>
  <div class="formInput">
      <!-- 首先要实现双向绑定一定要实现value值的绑定，以及input事件的监听 -->
      <!-- $attrs存储除了除了props数据之外的属性值 -->
      <!-- 而v-bind其实是一个语法糖，将$attrs结构赋值之后，再将属性赋值挂载 -->
    <input :value="value" @input='onInput' v-bind='$attrs'>
  </div>
</template>

<script>
export default {
    // 避免顶层容器继承传入的属性
    inheritAttrs:false,
    props:{
        value:{
            type:String,
            defalut:''
        }
    },
    methods:{
        // 当input框的值发生改变时就将该动作告知父组件
        onInput(e){
            this.$emit('input',e.target.value);
            // 当input事件被触发我们就要进行相应的数据校验
            // 通知inputItem进行数据校验
            this.$parent.$emit('validate');
        }
    }
}
</script>

<style>
.formInput{
    margin: 0 auto;
}
input{
    border:1px solid #ccc;
    border-radius: 5px;
    height: 36px;
    width: 220px;
    padding: 2px 15px;
    outline: none;
    font-size: 16px;
    /* background-color: rgb(123, 212, 211 50%) !important; */
}

</style>