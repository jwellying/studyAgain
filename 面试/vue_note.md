# 插值模板语法
{{msg}}
# MVVM：model view viewmodel
与mvc相比
在操控页面数据的时候我们不必再去关注**Dom**结点，而是直接通过直接更新数据，然后数据重渲染
+ model 数据
+ view 页面视图
+ viewmodel 将二者联合起来的
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

