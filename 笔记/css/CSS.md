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
## 元素种类

### 行内和块级元素
+ 行内元素常见的有：span,img,a,input,label,select,textarea,br
+ 块级元素常见的有：div,p,ul-li,nav     
+ 行内块级：button
### 行内和块级元素的区别
+ 行内元素：从左往右排列，不占据一行；对其设置宽高及margin的上下距离无效
+ 块级元素：单独占据一行
+ 行内块级元素：不会自动换行，相比行内可以设置宽高，具有行内块级共同特性
+ 块级/行内可通过display来改变 inline/block

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



## 盒子模型
旧版IE：盒子=（内容+border+padding）统称为content
新标准：盒子=content+padding+border


## 清除浮动
当父元素不给高度的时候，内部元素不浮动时会撑开,而浮动的时候，父元素变成一条线
+ 1.额外标签法（在最后一个浮动标签后，新加一个标签，给其设置clear：both；）（不推荐）
如果我们清除了浮动，父元素自动检测子盒子最高的高度，然后与其同高。
优点：通俗易懂，方便 缺点：添加无意义标签，语义化差
+ 2.父级添加overflow属性（父元素添加overflow:hidden）（不推荐）
优点：代码简洁
缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素
+ 3.使用after伪元素清除浮动（推荐使用）
```html

    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
 
<body>
    <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
        <!--<div class="clear">额外标签法</div>-->
    </div>
    <div class="footer"></div>
</body>
```
+ 4.使用before和after双伪元素清除浮动

     .clearfix:after,.clearfix:before{
        content: "";
        display: table;
    }
    .clearfix:after{
        clear: both;
    }
    .clearfix{
        *zoom: 1;
    }
 
 <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
    </div>
    <div class="footer"></div>


## 定位
### 文档流
文档流中：内联元素默认从左到右流，遇到阻碍或者宽度不够自动换行，继续按照从左到右的方式布局。块级元素单独占据一行，并按照从上到下的方式布局。
### 脱离文档流的方式（对父高度有影响）
+ float:left; 
+ position: absolute; 
+ position:fixed  
### 定位的四种方式
#### static（默认）
一般默认为static，不会脱离文档流
#### relative
相对定位的定位移动位置是相对他自己的原位置
不会脱离文档流
#### absolute
绝对定位有参照的父元素，会脱离正常文档流
**如果父级元素没有定位**绝对定位的标准是相对于浏览器窗口的
**子绝父相**的应用:关键点在于子类绝对定位后，不占位置，又能绝对定位在父盒子中
#### fixed
定位元素在浏览器窗口是不移动的，脱离文档流；

## 垂直水平居中
+ 行内元素 水平居中：text-align：center
          垂直居中：line-height = height
+ 块状元素 水平居中：margin：0 auto
           垂直居中：position：realtive top:50%;left:50%;margin-top:-50px;(大小确定)
           （大小不确定）transform: translateY(-50%)
+ flex      justify-content: center;(水平)
            align-items: center;（垂直）
```css
 .father{
            height: 300px;
            width: 300px;
            background-color: blue;
            margin: 100px auto;
            position: relative;
        }
        .son{
            width: 100px;
            word-wrap: break-word;
            background-color: pink;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -50px; 
            /* (宽度固定式取宽度的一半负值) */
            /* margin: 0 auto; */
            /* margin-top: -25px;
             */
            transform: translateY(-50%); 
            /*(高度不定时使用transform)*/
        }
```
## 文字溢出隐藏
```css
/* 多行溢出隐藏 */
 .text{
            height: 40px;
            width: 100px;
            border: 1px solid blue;
            word-wrap: break-word;
            /* 用于英文 */
            /* white-space: nowrap; */
            /* 用于中文 */
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
```
## BFC(块级格式化上下文)
### 什么是BFC
具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
### 怎么样能创建一个BFC
一个块格式化上下文由以下之一创建：

根元素或其它包含它的元素
浮动元素 (元素的 float 不是 none)
绝对定位元素 (元素具有 position 为 absolute 或 fixed)
内联块 (元素具有 display: inline-block)
表格单元格 (元素具有 display: table-cell，HTML 表格单元格默认属性)
表格标题 (元素具有 display: table-caption, HTML 表格标题默认属性)
具有 overflow 且值不是 visible 的块元素，
display: flow-root
column-span: all 应当总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中。
一个块格式化上下文包括创建它的元素内部所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。
块格式化上下文对于定位 (参见 float) 与清除浮动 (参见 clear) 很重要。定位和清除浮动的样式规则只适用于处于同一块格式化上下文内的元素。浮动不会影响其它块格式化上下文中元素的布局，并且清除浮动只能清除同一块格式化上下文中在它前面的元素的浮动。

### margin重叠问题
计算方法：取最大值
+ 相邻的盒模型中，如果其中的一个是浮动的（float），垂直margin不会重叠，并且浮动的盒模型和它的子元素之间也是这样。
+ 设置了overflow属性的元素和它的子元素之间的margin不被重叠（overflow取值为visible除外）。
+ 设置了绝对定位（position:absolute）的盒模型，垂直margin不会被重叠，并且和他们的子元素之间也是一样
+ 设置了display:inline-block的元素，垂直margin不会重叠，甚至和他们的子元素之间也是一样。
### 解决方法
父元素绑定
/* 方法一 overflow: hidden; */
/* 方法二 padding-top: 1px; */
/* 方法三 border-top: 1px solid transparent; */
子元素绑定
内层元素绝对定位 postion:absolute;
内层元素 加float:left或display:inline-block;
内层元素padding:1px;

## Flex伸缩布局
## css3动画

# display:none和visibility:hide