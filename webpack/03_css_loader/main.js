//入口文件
//导入模块
import vue from './vue';
// 导入css文件
import './main.css'


//创建实例
new vue({
    el:'#app',
    template:'<App></App>',
    components:{
        App:obj.default
    }
})