//入口文件
//导入模块
import vue from './vue';
import App from './App'



//创建实例
new vue({
    el:'#app',
    template:'<App></App>',
    components:{
        App
    }
})