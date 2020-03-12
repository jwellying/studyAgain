<template>
    <div>
        <div v-show='show' @click="log">我是news</div>
        <button @click='change'>change</button>
    </div>
</template>

<script>
export default {
    methods:{
        change(){
            this.$emit('changeFather');
        },
        log(){
            console.log(this.show);
            // this.show = false;
            // 会报错
            // vue不建议在子组件中改变父组件的值
        }
    },
    data(){
        return {
            
        }
    },
    props:['show']
}
</script>

<style>

</style>