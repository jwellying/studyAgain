# 自定义属性
+ data-*
```代码
    //html
    <div id="box" data-index="0" i="0"></div>

    //js
    var box = document.getElementById('box');
    console.log(box.dataset) //返回一个对象,里面包含了所有当前标签上用data-定义的属性
    console.log(box.dataset.index) //返回data-index 的值
```