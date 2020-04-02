# vue的工作机制
1. 当我们new Vue()创建一个vue实例之后，vue会进行哪些操作呢？
调用Vue构造函数进行初始化生命周期、事件、props、methods、data、watch、computed等
而其中最重要的就是调用Object.defineProperty设置getter和setter，来实现vue的**响应式**以及**依赖收集**
2. 初始化之后使用$mount进行组件的挂载
3. 代码解析、依赖收集
依赖收集的思路
当我们第一次对页面初始渲染的时候，解析页面模板语句，如果对data中的某个属性有使用，会触发object.defineproperty中的get属性，我们在get属性被触发时，给该属性添加一个观察者对象（dep），将对该属性引用的结点信息保存在一个可观察对象中（wacther）;一个属性对应于一个dep，然而一个dep管理多个watcher