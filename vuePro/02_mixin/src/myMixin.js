import Vue from '../node_modules/vue/dist/vue'

var myMixin = Vue.mixin({
    created(){
        // console.log('mixin被创建了');
        // 利用$options这个实例对象我们可以获得调用mixin的实例的一些属性
        let myOption = this.$options.name;
        console.log(`来自${myOption}的mixin`);
        
    }
})

export default myMixin;