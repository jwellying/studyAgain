// let price = 1000;

// let KTV = {
//     total: 0,
//     buy(cash){
//         this.total += cash;
//     },
//     pay(){
//         if(this.total<price){
//             console.log('请消费满1000元');
            
//         }else{
//             console.log('欢迎下次光临');
            
//         }
//     }
// }

// export default KTV;

var name = 'jack';
var age = 18;
var fn = function(){
    console.log(111);
    
}
// 导出对象
// 接收的时候必须用这些模块名

export {
    name,
    age,
    fn
}

import { name,age,fn } from '..'
// 具名导出
export {
    name as n,
    age as a,
    fn as f
}

import { n,a,f } from '..'

// 也可以直接接收所有
import * as info from '..'

// 默认导出
export default fn;
// 接收的时候，可以任意命名
import myFuction from '..';
// 注意此处不需要{}，一个模块只能有一个默认导出
