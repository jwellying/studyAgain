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
