<template>
    <div>
        <div>我是news</div>
        <button @click="callHome">call home</button>
    </div>
</template>

<script>
import Bus from '../../eventBus'
export default {
    created(){
        Bus.$on('callN',()=>{
            console.log('news收到');
        })
    },
    methods:{
        callHome(){
            Bus.$emit('callH');
        }
    },
    data(){
        return {
            
        }
    },
}
</script>

<style>

</style>