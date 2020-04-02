# css选择器的优先级
内联>id选择器>类选择器>标签选择器
例：
```css

ul li .red{

}

#red{

}

方式一：{0,0,1,2} < 方式二：{0,1,0,0}
```
# css中隐藏的方式
opcity：0 --- 实质只是将元素变为透明，元素所占文档位置不变，也可以进行交互；
visibility：hidden --- 元素不可见，但仍然占文档空间，不可交互；
diaplay：none --- 元素不再占文档空间，也不可交互；
z-index：-9999 --- 本质其实是将元素在z轴方向的层级调到最下面，被其他元素覆盖而不可见 

# display:none和visibility:hide区别
+ 使用display:none隐藏后的元素不再占据空间，点击事件失效；
+ visibility:hide隐藏后的元素依旧占据原来的空间，点击事件失效
+ visibility:hide具有继承性，子元素继承父元素，但对子元素设置visibility:visible子元素显示
+ visibility:hide对计数器没有影响
+ display:none会引起回流(重排)和重绘 visibility:hidden会引起重绘 
