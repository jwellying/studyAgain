<template>
    <input :value='value' @input='input' v-bind='$attrs'>
</template>

<script>
export default {
    inheritAttrs:false,
    props:{
        value:{
            type:String,
            default:''
        }
    },
    methods:{
        input(e){
            this.$emit('input',e.target.value);
            this.$parent.$emit('validate');
        }
    }
}
</script>

<style>

</style>