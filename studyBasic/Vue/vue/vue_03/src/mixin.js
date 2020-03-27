export default {
    created(){
        
        setTimeout(()=>{
            console.log(`${this.$options.name}组件请求发出去了`);
        },1000)
    }
}
// 可以把他想象成组件的影子