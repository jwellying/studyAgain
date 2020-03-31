<template>
    <div>
        <div>我是home的子组件</div>
        <button @click="log">click</button>
    </div>
</template>

<script>
export default {
    name:'son',
    // mounted(){
    //     // 可以通过这样的方式获取父组件的方法
    //     // 但是如果所有的后代组件都要获取到父组件的方法呢？
    //     this.$parent.log();
    // }
    inject:['log']
}
</script>

<style>

</style>