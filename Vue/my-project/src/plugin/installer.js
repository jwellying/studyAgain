// 初始化一个函数
function Installer(){

}
// 绑定install函数
Installer.install = function(Vue){
    // 接收vue的构造函数，给原型挂载属性、全局组件或者拦截器
    // console.log(Vue);
    // 挂载属性
    Vue.component('test',function(){
        console.log('hhh');
        
    })
    // 挂载属性
    // 这样存在一个问题
    // 子类对象可以更改父类对象属性
    // Vue.prototype.$log = function(){
    //     console.log('hahaha');
        
    // }
    // 要定义一个不会轻易被更改的属性
    // 我们需要使用object.defineproperty

    let log = function(){
        console.log('我不能被改变');
        
    }
    Object.defineProperty(Vue.prototype,'$log',{
        // 向外提供获取或者修改的方法
        set:function(newV){
            console.log('不能修改哦');
            log = newV;
        },
        get:function(){
            return log;
        }
    })

    
}

// 导出
export default Installer;
