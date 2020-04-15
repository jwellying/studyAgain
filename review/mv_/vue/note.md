# vue的实例方法
vue通过 `$`向外暴露实例对象或方法
+ $el
+ $data
+ $parent
+ $son

# vue的生命周期
+ beforeCreate()     el、data都还未创建 主要用于loading事件
+ created()          el还未挂载，data已经创建，可以访问数据 主要用于发送请求数据
+ beforeMounted()    el、data都已创建
+ mounted()          el、data都已创建，且已经挂载到结点上，可以用于操作dom
+ beforeUpdate()     data更新前
+ updated()          data更新后
+ activated()        结点有效时
+ deactivated()      结点无效时(配合keep-alive可以实现组件的缓存)
+ beforeDestroy()    实例被销毁前(可以用于计时器的销毁、$on的绑定也需要在组件销毁之前解绑、事件解绑如scroll、mouseover)
+ destroyed()        实例被销毁

# v-if和v-show
v-if不会创建结点，只会为结点预留一个空位
v-show会将节点创建好，然后通过display的方式显示和隐藏
# 为什么组件中的data必须是一个函数
因为每当我们使用一次组件，就相当于创建了一个实例对象，如果data是一个对象的话，每个实例对data的修改都会对其他实例的data产生影响；但是如果data是一个函数，每个组件实例对data只是产生一个引用，对其中一个data的改变不会影响另一个；
简单的说就是如果data是一个对象，所有组件实例共享这个对象；
如果data是一个函数，每个实例各自维护一份data对象的拷贝；
# props属性
vue中有单向数据流的概念，即数据流只能从父组件流向子组件，子组件中改变不会使父组件中值的更新；
```js
props{
    msg:String
}
```