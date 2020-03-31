<template>
<div>
     <slot></slot>
</div>
</template>

<script>
export default {
    provide(){
        return {
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

<style>

</style>