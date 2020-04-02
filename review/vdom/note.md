## 什么是虚拟dom
虚拟dom是通过原生的js对象来描述一个dom
```js
<!-- 原生dom -->
<div class='item'>
    <p class='text'>text-content</p>
</div>
<!-- 虚拟dom -->
createElement(){
    return  {
    tag:'div',
    data:{class:'item'},
    children:[
        {
            tag:'p',
            data:{class:'text'},
            children:['text-content']
        }
    ]
}
}
```
虚拟dom为什么高效？
+ 原生的dom结构十分复杂，所以直接操作dom不是一件理想的事情；
而通过虚拟dom的引入，我们用简单的虚拟dom元素去模拟原生的dom，
通过比较新旧dom的差异性(diff算法)，将dom操作更加细粒度化
+ 频繁的操作dom也会造成浏览器的回流和重绘，性能会大大下降
+ 在实际的开发我们的dom更新一般不会跨级，所以diff算法的时间复杂度仅为O(n)

DOM 引擎、JS 引擎 相互独立，但又工作在同一线程（主线程）
JS 代码调用 DOM API 必须 挂起 JS 引擎、转换传入参数数据、激活 DOM 引擎，DOM 重绘后再转换可能有的返回值，最后激活 JS 引擎并继续执行若有频繁的 DOM API 调用，且浏览器厂商不做“批量处理”优化，
引擎间切换的单位代价将迅速积累若其中有强制重绘的 DOM API 调用，重新计算布局、重新绘制图像会引起更大的性能消耗。

其次是 VDOM 和真实 DOM 的区别和优化：

虚拟 DOM 不会立马进行排版与重绘操作
虚拟 DOM 进行频繁修改，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多DOM节点排版与重绘损耗
虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部