// 编写一个插件
let myOptions;
function myPlugin(options){
    // myOptions = options;
}

// 每一个插件都有一个install函数
myPlugin.install = function(Vue){
    // 将mixin定义在插件中
    Vue.mixin({
        created(){
            // 判断谁能操作
         
            if(this.$options.name==='news'||this.$options.name==='home'){
                
                this.$store.dispatch('addByAsync');
            }
        }
    })
}


export default myPlugin;