# 渲染机制对比
react: 在react中如果某个组件的状态发生改变，react会把此组件以及此组件的所有后代组件重新渲染，不过重新渲染并不代表会全部丢弃上一次的渲染结果，react中间还是会通过diff去比较两次的虚拟dom最后patch到真实的dom上。虽然如此，如果组件树过大，diff其实还是会有一部分的开销，因为diff的过程依然是比较以此组件为根的整颗组件树。react提供给我们的解决方案是shouldComponentUpdate，以此函数的返回结果来判断是否需要执行后面的diff、patch与update。再实际的开发过程中我们常常会用pureComponent来帮助我们做这一层逻辑判断，但需要注意的是pureComponent的shouldComponentUpdate也只是浅比较，假设比较的类型是object，如果object仅属性发生变化，但是其引用没发生变化那么shouldComponentUpdate会认为两者之间没有任何变化。
所以react推荐使用函数式编程的方法去改变state

vue: vue的响应式使用的是Object.definePropertyapi，并且由于在getter中实现了依赖收集，所以不会像react一样去比较整颗组件树，而是更加细粒度的去更新状态有变化的组件，同时defineProperty也不存在像shouldComponentUpdate中比较引用的问题。


对比: vue的更新要比react粒度要更细也更加不用去人为的关心，虽然react可以通过shouldComponentUpdate实现同样的效果，然而如果state的层级结构比较深那么相应的手动去优化这部分代码也会更加费力，所以在react中我们需要尽量保证整体结构的扁平，去让pureComponent帮助我们自动的对此作出优化。

结论与很多对比一样，vue适合小而精的项目，react则更适用于偏大的项目，但是立住这个结论的支点是不一样的，vue的组件由于一些复杂逻辑的复用方式和组件可应用模式的不足，以至于在大型项目中复用性与设计性是不如react的，但是在小而精的项目里，vue更友好的书写方式，更简化的代码与更声明式的指令都是很棒的优势与特点，而相反的react在中大型项目中能更好的完成vue的不足项，但是也更需要团队技术整体比较给力，领头大佬的设计与把关能力要更优秀，不然糟糕的设计或许不如没有设计。有一些比较总会认为vue由于api较多书写更灵活导致最后的代码难以维护，事实上react或许才是更灵活的一个，因为react几乎没有api导致无论怎样的写代码都是可行的，团队中有10个人可能就有10种方式去理解react，并且无论是状态管理还是异步中间件再加上路由等等，react的社区都提供了更多的选项，怎么选型，采用什么方案也是稍令人头疼的事情之一。


# 异同点
共同点：

　　　　a、都使用虚拟dom

　　　　b、提供了响应式和组件化的视图组件

　　　　c、注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。


　　区别：

　　　　a、优化

　　　　b、HTML&CSS

　　　　c、构建工具

　　　　d、数据绑定

　　　　e、状态管理

　　　　f、路由

　　　　g、渲染性能

　　　　h、数据更新

　　　　i、开发模式及规模

　　　　j、使用场景

　　　　k、服务器端渲染（SSR）

　　　　l、扩展(高阶组件和mixin)

# 很多人都说vue不适合做大型的项目
vue1.0时代每一个数据绑定都会对应一个可观察者对象，放入对应属性的观察者对象中，当数据绑定十分多的时候，可观察对象就会变得十分多，导致项目变得十分笨重；
但是在后来的改进中vue引入了虚拟dom，每一个组件会挂载一个观察者对象，当组件中发生变化，虽然不能知道到底是那一部分发生了变化，但是由于虚拟dom的引入，我们可以使用diff算法进行比对，发现组件中的那个值发生变化，将改变转换成dom操作去更新视图

# vue Vs react
1. vue采用模板搭建应用
like this
```js
<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
```
2. react它要求开发者借助JSX在JavaScript中创建DOM
like this
```js
import React, { Component } from 'react'

export default class react extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
```
