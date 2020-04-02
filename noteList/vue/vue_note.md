# 插值模板语法
{{msg}}
# vue中的data属性
+ vue实例中的data可以是一个对象也可以是一个函数
```vue
    new Vue({
        el:"#app",
        data:{
            obj:"我是一个对象"
        }
    })
```
+ vue组件中的data必须是一个function函数
```vue
    缩写为
    data(){
        return{
            obj:"我必须是一个function"
        }
    }
```
**那么为什么组件中的data必须是一个函数呢**
>因为组件被复用时，如果data是一个对象，那么当一个页面对该对象进行修改时，
会影响其他页面的data对象；
# vue中的指令
```vue
     template:`
                //必需创建一个根结点包裹起来
                <div>
                    <div v-text="msg"></div>
                    <div v-html="msg2"></div>
                    <div v-if="msg3">只有在真的时候你才可以看到我</div>
                    <div v-show="isShow">show</div>
                    <div v-if="Math.random()>0.5">大于0.5</div>
                    <div v-else>小于0.5</div>
                    <div v-for="todo in todos">{{todo.name}}</div>
                </div>
            `,
            data(){
                return{
                    msg:'hhh',
                    msg2:"<h2>哈哈哈</h2>",
                    msg3:false,
                    todos:[
                        {name:'jack'},
                        {name:'rose'},
                        {name:'lily'}
                    ],
                    isShow:false
                }
```
+ **v-if**和**v-show**的区别
v-if会为将来可能出现的dom预留一个空格注释，但是不会直接创建dom结点
v-show会创建节点，通过操控节点的display属性来进行更改

# v-bind绑定属性
```vue
    <div class="now" v-bind:class="{active:isChange}">我会变色</div>
    //缩写形式为 `:class（属性名）="属性值"`
```
# v-model 实现双向绑定
```vue
    <input type="text" v-model="msg">
    <p>{{msg}}</p> 
```
# 父子组件通信
## 父传子
+ 父组件将要传递的数据通过bind属性发送
+ 子组件通过pros属性接收数据进行处理(接受的是属性值)
```vue
     父组件中
     template:`
                <div>
                    <p>我是父组件</p>
                    <child-component :obj="obj"></child-component>
                </div>
            `,

    子组件中
    template:`
                <div>
                    <p>我是子组件</p>
                    <ul>
                        <li v-for="(value,index) in obj">
                            {{value.name}}--{{value.fav}}    
                        </li>
                    </ul>
                </div>
            `,
    props:['obj']
```
## 子传父
+ 子传父需要通过绑定方法来实现
```vue
    子组件中
    template:`
                <div class="head">
                    我是一个头部组件<button @click="change">字体变大</button>
                </div>
                
            `,
            methods:{
                change(){
                    this.$emit('changeSize',this.data);
                    //$emit()方法的两个参数：
                    //第一个参数为方法名
                    //第二个参数为传递的值

                }
            }

    父组件中
    <div class="partOne">
        <Vheader @changeSize="change"/>
    </div>
    //通过方法进行数据值的更新
    //自定义方法为传递过来的方法名
```

# 子组件如何对全局组件更加灵活的应用呢
+ 子组件可以在全局组件的基础上进行一些个性化操作
+ slot插槽（具名插槽）
+ 子组件向父组件传递属性
```vue
    子组件（绑定一个自定义属性）
    template:`
                <div class="aside">我是一个侧边组件<Vbtn type="others"/></div>
                
            `
    父组件接收属性（这里要注意全局组件通过props接受的是属性名）
     Vue.component('Vbtn',{
            template:`
                <button :class='type'>按钮</button>
            `,
            props:['type']
        })
    //并且将该属性的属性值通过bind绑定

```
# filter过滤器
## 局部过滤器
+ 基本格式
```vue
    //那个组件需要使用就声明在那个组件的内部
    filters:{
        //通过function的形式
        filterName:function(){
            //return的形式返回结果
            return '￥' + price
        }
    }
    //调用方式
    {{过滤的属性名 | 过滤函数名}}
```
## 全局过滤器
+ 基本格式
```vue
    //声明在全局
    //全局过滤器
        Vue.filter('myReverse',function(value){
            return value.split('').reverse().join('')
        })
    //调用方式
    <h2>{{msg | myReverse}}</h2>
    {{过滤的属性名 | 过滤函数名}}
```
# 生命周期钩子函数
+ beforeCreate：vue实例的挂载元素$el和数据对象data都还没初始化
应用：添加loading事件
+ created：vue实例的挂载元素$el还未初始化，但是data对象已经创建
应用：结束loading事件、发送ajax请求后端数据，为渲染做准备
+ beforeMount：vue的实例挂载元素$el和数据对象data都已经被初始化，但是还只是虚拟的DOM结点
应用：...
+ mounted: vue的实例渲染完成
应用：配合路由钩子使用，可以用于操作DOM结点
+ beforeUpdate：data更新时触发
+ updated：data更新时触发（用于监听数据）
+ activated：实例处于激活状态
+ deactivated：实例被关闭状态
应用：配合<keep-alive></keep-alive>以及路由使用，可以实现组件的有缓存地隐藏显示
+ beforeDestroy、destroyed：实例销毁前和实例销毁后
实例被销毁后所有绑定在实例上的data数据和watch监听都被注销，但是DOM结点还是存在，
需要手动removeChild()

# 插值表达式
# data
# 指令
v-if
v-for--KEY(遍历中key的使用，以及相同组件复用时，key的使用)
v-on
v-bind
v-model
# 通信问题
# 生命周期
# keep-alive
# 组件注册--局部组件--全局组件
# 拦截器
# ref
# 插槽
# watch和computed
# 路由
# history和hash
# vuex
# axios
# 导航守卫
+ 局部的导航守卫
+ 全局的导航守卫
# 权限管理meta
```js
    // router.js
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        auth:true
      }
    },
    // home.vue
    beforeRouteEnter(to,from,next){
            console.log(to);
            if(to.meta.auth){
                if(localStorage.getItem('user')){
                    next();
                }else{
                    next({
                            path:'/login'
                        })
                }
            }
        }
```
# mixin
当组件A B要发一个共同的请求c，我们可以吧请求封装在mixin中
```js
1、定义一个mixin
export default {
    created(){
        
        setTimeout(()=>{
            console.log(`${this.$options.name}组件请求发出去了`);
        },1000)
    }
}
// 可以把他想象成组件的影子
2、使用mixin
mixin的使用场景，当我们在开发时需要经常使用一些方法时，我们可以将他们封装在mixin中，
mixin一个混入的概念，将多个对象混合在一起行程一个新的mixin对象，mixin对象可以调用所有对象的方法接口
比如说在首页的副tab-bar里面，有新闻、娱乐、学习三个模块，他们的功能很相似，甚至他们可能共用一个store仓库，我们就可以提取它公共的部分，写进mixin里面，然后再进行一些判断把他们区别开
// 局部引入以及使用
import mixin from './mixin'
export default {
  name:'App',
  mixins:[mixin]
}
// 全局引入使用
// 全局引入的时候要慎重，因为mixin会对每一个实例都产生影响
import mixin from './mixin'
Vue.mixin(mixin);
```
# 插件
```js
// 编写一个插件
let myOptions;
function myPlugin(options){
    myOptions = options;
}

// 每一个插件都有一个install函数
myPlugin.install = function(Vue){
    // 将mixin定义在插件中
    Vue.mixin({
        created(){
            // 判断谁能操作
         
            if(this.$options.name==='news'||this.$options.name==='home'){
                        console.log(1);
                        
                this.$store.dispatch('addByAsync');
            }
        }
    })
}


export default myPlugin;
```

# 骨架屏
因为单页面应用(spa)的特性，导致初始加载的时间比较长，初始加载请求的文件比较大，
所以初始白屏的时间会比较久，骨架屏可以给用户带来更好的体验
# 预渲染插件-->vue-cli-plugin-prerender-spa
预渲染的优点:因为单页面应用(spa)的特性，页面向外暴露的index文件里面只有
<div id='app'></div>以及一些文件的引入代码，不利于网站的SEO

# vue 中的实例对象或方法
通过实例对象我们可以访问到该实例的数据或方法
**访问根节点**-->$root
**访问父节点**-->$parent
**访问子节点**-->$refs(前提是子结点绑定了ref)
**依赖注入**
```js
    父组件传递
    provide(){
        return {
            log:this.log
        }
    }
    子组件中接收
    inject:['log']
```
# vue中的import实现懒加载
# 渲染的过渡效果
```html
<!-- 如果没有指定name -->
<!-- 那么css样式中默认使用 v- 开头 -->
<transition name = 'fade'>
    <p>wohuibian</p>
</transition>
```
```css
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
```
# 动画过渡的原理
基于css动画原理
当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：

自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。

如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。

如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
# 六个状态类
+ v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

+ v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成 之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

+ v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
 
+ v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
 
+ v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

+ v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
# vue核心的执行过程主要分为这几个阶段：

+ 1） 编译模板，
生成可复用的render function code，
这一步在vue实例的整个生命周期中只会执行一次甚至零次，
因为我们可以在打包的时候可以预编译

+ 2） 生成watcher等核心渲染监听，
在整个vue实例的生命过程中持续发生着作用，
对view和modal进行双向绑定

+ 3） 虚拟dom的diff比较，
当watcher监听到data的变更的时候，
就会根据注入新的data执行render function code，
生成新的虚拟dom，
跟老的虚拟dom（第一次执行的时候可能为空）进行diff比对，
不同的部分将写入真实的dom

# mixin的使用
mixin用于将组件的可复用功能进行封装
```js
mixin.js

import Vue from './vue'
var myMixin = Vue.mixin({
    data(){
        return{
            msg:'minxin的message'
        }
    },
    created(){
        console.log('mixin被创建了');
    },
    methods:{
        log(){
            console.log('mixin被log了');
        }
    }
})

组件中的使用
+ 先import
+ mixins:[myMixin]
```
+ mixin中的数据、方法、钩子函数会被合并到组件中去
+ 当mixin中的数据、方法与组件发生同名冲突时，已组件为准；
+ 当mixin与组件定义同名钩子函数时，mixin的钩子函数先于组件触发

```js
// mixin的全局使用
mixin.js
// 利用$options这个实例对象我们可以获得调用mixin的实例的一些属性
        let myOption = this.$options.name;
        console.log(`来自${myOption}的mixin`);
main.js中
全局使用
先import
然后Vue.mixin(myMixin);
```

# 自定义指令的使用
// 注册一个全局自定义指令 `v-focus`
```js
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```
局部注册
```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```
**自定义指令的参数**
bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

**指令钩子函数会被传入以下参数：**

+ el：指令所绑定的元素，可以用来直接操作 DOM。
+ binding：一个对象，包含以下属性：
+ name：指令名，不包括 v- 前缀。
+ value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
+ oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
+ expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
+ arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
+ modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
+ vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
+ oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
**除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。**

# 插件的定义及使用
