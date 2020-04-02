# flex的基本概念
![flex中的父子盒子元素](./img/flex.png)
当父元素display：flex之后，我们一般称其为flex container，其中遵循flex布局的元素就称为flex item
父容器有两个方向，即主轴(main axis)和交叉轴(cross axis)
## 基本属性
### 父盒子属性
+ flex-direction: row | row-reverse | column | column-reverse
决定元素沿哪个方向排列
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。
+ flex-wrap:nowrap | wrap | wrap-reverse;
绝对元素是否换行以及怎么换行
nowrap：不换行
wrap：换行且第一行在上方
wrap-reverse：换行且第一行在下方
+ flex-flow: row nowrap(默认)
该属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
+ justify-content：flex-start | flex-end | center | space-between | space-around;
该属性定义了项目在主轴上的对齐方式。
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
+ align-items: flex-start | flex-end | center | baseline | stretch;
align-items属性定义项目在交叉轴上如何对齐。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### 子元素属性
+ order: <integer>;
该属性决定了项目的排列顺序，数值越小越前，默认为0；
+ flex-grow: <number>; /* default 0 */
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
+ flex-shrink: <number>; /* default 0 */
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
+  flex-basis: <length> | auto; /* default auto */
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
+ flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
三个属性的简写
+ align-self: auto | flex-start | flex-end | center | baseline | stretch;
该属性允许该项目有和其他项目不一样的属性