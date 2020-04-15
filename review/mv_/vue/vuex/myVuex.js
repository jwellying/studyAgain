/*
1.维护状态state
2.改变状态mutation（commit）
3.业务逻辑处理的action（dispatch）
4.状态派发getter
5.实现state响应式
6.插件形式去实现
7.混入方法的应用
*/ 
let Vue;
class Store{
    constructor(option) {
        this.state = new Vue({
            data:option.state
        })
        this.mutations = option.mutations || {};
        this.actions = option.actions || {};
        if(option.getters){
            this.handleGetters(option.getters);
        }
    }
    commit = (eventName,arg)=>{
        const fn = this.mutations[eventName];
        // 一定要传state
        fn(this.state,arg)
    }
    dispatch = (eventName,arg)=>{
        const fn = this.actions[eventName];
        return fn(this,arg);
    }
    handleGetters(getters){
        this.getters = {}
        Object.keys(getters).forEach((key)=>{
            // 使用defineproperty的方式劫持了数据，让getters变成一个只读的状态
            Object.defineProperty(this.getters,key,{
                get:()=>{
                    return getters[key](this.state);
                }
            })
            // console.log(key);
            
        })
        
    }
    
}

function install(_Vue){
    Vue = _Vue;
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store;
    
            }
        }
    })
}

export default {Store,install}