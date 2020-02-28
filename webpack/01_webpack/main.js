//入口文件
//导入模块
import vue from './vue';
import App from './App';
// 分开导入
// import {num1,num2} from './App';
// 合并导入
import * as obj from './App';
console.log(obj.num1);
console.log(obj.num2);


//创建实例
new vue({
    el:'#app',
    template:'<App></App>',
    components:{
        App:obj.default
    }
})