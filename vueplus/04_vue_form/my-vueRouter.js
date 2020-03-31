// 手动实现一个vuerouter
// 其实vue是用一个插件的形式去实现vueRouter
// 为什么不直接引入vue呢
// 因为引入vue后webpack会将其一同打包，vue被反复打包

// 会导致项目变大
let Vue;
class vueRouter{
    constructor(options){
        this.$options = options;
        // 创建一个路由与组件的映射对象
        this.routeMap = {};
        // 当前的current需要响应式
        // 利用vue响应式原理可以实现这一点
        this.app = new Vue({
            data(){
                return {
                    current:'/'
                }
            }
        })
    }
    init(){
        // 初始化第一步
        // 绑定监听事件
        this.bindEvent();
        // 初始化第二步
        // 解析传进来的路由配置对象即routes
        this.createRouterMap(this.$options);
        // 第三步
        // 创建router-link、router-view组件
        this.createComponent();
    }
    bindEvent(){
        window.addEventListener('hashchange',this.onHashChange.bind(this));
        window.addEventListener('load',this.onHashChange.bind(this));
    }
    onHashChange(){
        // 获取当前路径（剪切后的路径若不存在则默认是根路径）
        this.app.current = window.location.hash.slice(1) || '/';
        console.log(this.app.current);
        
    }
    createRouterMap(options){
        options.routes.forEach((route)=>{
            // routeMap就是路由映射对象
            // ['/home]:{path:'/home',component:'Home'}
            console.log(route);
            
            this.routeMap[route.path] = route;
        })
    }
    createComponent(){
        Vue.component('router-link',{
            props:{
                to:String
            },
            render(h){
                return h('a',{$attrs:{href:'#'+this.to}},this.$slots.default)
            }
        })
        Vue.component('router-view',{
            render:(h)=>{
                let comp = this.routeMap[this.app.current].component;
                return h(comp)
            }
        })
    }
}
// 为插件实现install方法
// 插件使用时Vue.use(xxx)会将vue传给插件
vueRouter.install = function(_Vue){
    Vue = _Vue;
    // 将传入的vue保存供给上面使用

    // 使用mixin对Vue进行扩展
    Vue.mixin({
        // 在vue实例创建初始化的时候被调用
        beforeCreate(){
            // console.log('beforeCreate');
            // 在main.js中我们会引入一个router对象
            // 就是router.js中配置的对象
            // 使用mixin我们将该对象在初始化时挂载到vue原型上
            // Vue.prototype.$router = this.$options.router;
            // 那么问题是我们只希望在根实例被初始化时进行一次挂载即可
            // vue是如何实现的呢？
            // 可以注意到，我们只有在根实例的时候会配置router这个参数
            if(this.$options.router){
               
                Vue.prototype.$router = this.$options.router;
                // 路由对象初始化
                this.$options.router.init();
            }
        }
    })
}

export default vueRouter;

// // vueRouter源码中是如何实现嵌套路由的？
 

// 实现一个VueRouter
// let Vue;
// class VueRouter{
//     constructor(options) {
//         // 接收参数
//         this.$options = options;
//         // 创建路由匹配数组
//         this.routerMap = [];
//         // 利用vue实现可响应
//         let app = new Vue({
//             data(){
//                 return {
//                     current:'/'
//                 }
//             }
//         })
//     }
//     init(){
//         // 监听变化事件
//         this.bindEvents();
//         // 解析路由配置对象
//         this.createrouterMap(this.$options);
//         // 创建组件
//         this.createComponent();
//     }
//     bindEvents(){
//         window.addEventListener('hashchange',this.onhashChange.bind(this));
//         window.addEventListener('onload',this.onhashChange.bind(this));

//     }
//     onhashChange(){
//         this.app.current = window.location.hash.slice(1) || '/';
//     }
//     createrouterMap(option){
//         option.routes.forEach((route)=>{
//             this.routerMap[route.path] = route;
//         })
//     }
//     createComponent(){
//         Vue.component('router-link',{
//             props:{
//                 to:String,
//                 required:true
//             },
//             render(h){
//                 h('a',{attrs:{href:this.to}},this.$slots);
//             }
//         })
//         Vue.component('router-view',{
            
//             render:(h)=>{
//                 let comp = this.routerMap[this.app.current].component;
//                 h(comp);
//             }
//         })
//     }
    
// }

// // 实现插件的install函数
// VueRouter.install = function(_Vue){
//     // 第一步
//     Vue = _Vue;
//     // 使用mixin对vue进行扩展
//     Vue.mixin({
//         beforeCreate(){
//             if(this.$options.router){
//                 Vue.prototype.$router = this.$options.router;
//                 this.$options.$router.init();
//             }
            

//         }
//     })
// }

// export default VueRouter;