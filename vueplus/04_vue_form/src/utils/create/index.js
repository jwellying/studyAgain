// 创建一个组件实例
// 第一步导入vue对象
import Vue from 'vue'
// create函数
export default function create(component,props){
    let vm = new Vue({
        render(h){
            // h函数提供一个方法可以用于渲染vnode
            return h(component,{props})
        }
    }).$mount();

    // 获取组件对象
    let com = vm.$children[0];
    // 手动将组件挂载到body对象上
    document.body.appendChild(vm.$el);
    // 将挂载移除、销毁实例
    com.remove = ()=>{
        document.body.removeChild(vm.$el);
        vm.$destroy;
    }

    return com;
}