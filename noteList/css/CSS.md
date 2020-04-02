# css
## 选择器
### 标签选择器
```css
p{
    color:'red';
}
```
### 类选择器
```css
.class{
    color:'red';
}
```
### ID选择器
```css
#id{
    color:'red';
}
```
### 通配符选择器
```css
*{
    color:'red';
}
```
### 伪类选择器
+ 链接伪类：(针对于<a>标签)
```css
        //顺序不能随便改变
        a:link{
            color: cadetblue; //原来的
        }
        a:visited{
            color: coral;    //访问过的
        }
        a:hover{
            color: darkblue;    //鼠标悬浮
        }
        a:active{
            color: darkolivegreen;  //鼠标不放开
        }
```

+ 结构伪类选择器
 + 子代选择器
```css
    li:first-child{
        color:red;
    }
    li:last-child{
        color:red;
    }
        li:nth-child(4){
            color:red;
        }
        /* 偶数 */
        li:nth-child(even){
            color:red;
        }
        /* 奇数 */
        li:nth-child(odd){
            color:red;
        }
        /* 3 6 9 */
        li:nth-child(3n){
            color:red;
        }
        /* 从下往上数 */
    li:nth-last-child(even){
        color:red;
    }
```
  + 目标选择器
 ```css
 :target{
     color:red
 }
```
### 伪元素选择器
```css
p::first-letter{
    /* 第一个字 */
    color:red;
}
p::first-line{
    /* 第一行 */
    color:red;
}
p::selection{
    /* 选中部分文字样式 */
    color:red;
}

```
#### before和after伪元素选择器
```css
    div::before{
        content: '大';
    }
    div::after{
        content: '好';
    }
```
#### 应用
+ 1.小三角样式
+ 2.清除浮动

## 文字样式
### 首行缩进 字符间距 字间距
```css
p{
    /* 首行缩进 */
    text-indent:10px; 
    /* 字间距 */
    letter-spacing:.5px;
    /* 词间距 */
    word-spacing: 1px;
}
```
### 文字阴影
```css
p{
    /* 第一个参数在x轴的偏移 */
    /* 第一个参数在y轴的偏移 */
    /* 模糊度或者粗细 */
    /* 颜色 */
    /* 透明：transparent */
    text-shadow:5px 5px 5px #ccc;
}
```

## 背景
### 背景颜色(background-color)
```css
p {
    background-color: gray;
}
```
### 背景图片(background-image)
```css
body {
    background-image: url(/i/eg_bg_04.gif);
}
下面例子为一个段落应用了一个背景，而不会对文档的其他部分应用背景：

p.flower {background-image: url(/i/eg_bg_03.gif);}
您甚至可以为行内元素设置背景图像，下面的例子为一个链接设置了背景图像：

a.radio {background-image: url(/i/eg_bg_07.gif);}
```
### 背景平铺
```css
body {
    background-image: url(/i/eg_bg_04.gif);
    background-repeat: repeat-y;
}

```
### 背景位置以及滚动
```css 
    body {
            background-image: url('../webpack/06_src_dist/src/img.jpeg');
            background-position: center;
            background-repeat: repeat-x;
            background-color: tomato;
            background-attachment: scroll;
            height: 1000px;
        }
```
### 背景大小
background-size：宽 高 (直接指定)
                 百分比
                 cover (自动缩放比例，铺满盒子，溢出隐藏)
                 contain(与cover不同的就在不会因为溢出隐藏，图片被保证完整)


# display:none和visibility:hide
+ 使用display:none隐藏后的元素不再占据空间，点击事件失效；
+ visibility:hide隐藏后的元素依旧占据原来的空间，点击事件失效
+ visibility:hide具有继承性，子元素继承父元素，但对子元素设置visibility:visible子元素显示
+ visibility:hide对计数器没有影响
+ display:none会引起回流(重排)和重绘 visibility:hidden会引起重绘 