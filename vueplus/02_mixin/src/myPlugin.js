
// 编写一个插件
let myPlugin = {};

// 每一个插件都有一个install函数
myPlugin.install = function (Vue,options) {
    // 编写一个全局的方法
    Vue.log = function(){
        console.log('我是vue的全局方法');
        
    }
    // Vue.prototype.$log = function(){
    //     console.log('我是vue的实例方法');
        
    // }
    // Vue.prototype.$name = 'plugin'
    // Vue.directive('focus',{
    //     bind:function(){
    //         console.log('focus');
            
    //     }
    // })

}


export default myPlugin;