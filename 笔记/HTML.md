# HTML 初识

```html
<HTML>   
    <head>     
        <title></title>
    </head>
    <body>
    </body>
</HTML>
```
~~~
1 HTML标签：

作用所有HTML中标签的一个根节点。

2 head标签：

作用：用于存放：

title,meta,base,style,script,link

注意在head标签中我们必须要设置的标签是title

3.title标签：

作用：让页面拥有一个属于自己的标题。

4.body标签：

作用：页面在的主体部分，用于存放所有的HTML标签：

p,h,a,b,u,i,s,em,del,ins,strong,img

~~~

## HTML标签分类

1.双标签

~~~html
<标签名> 内容 </标签名>
~~~

该语法中“<标签名>”表示该标签的作用开始，一般称为“开始标签（start tag）”，“</标签名>” 表示该标签的作用结束，一般称为“结束标签（end tag）”。和开始标签相比，结束标签只是在前面加了一个关闭符“/”。

> ~~~html
> 比如 <body>我是文字  </body>
> ~~~

2.单标签

~~~html
<标签名 />
~~~

  单标签也称空标签，是指用一个标签符号即可完整地描述某个功能的标签。

> ~~~html
> 比如  <br />
> ~~~

## HTML标签关系

标签的相互关系就分为两种：

1.嵌套关系

```html
<head>  <title> </title>  </head>
```

2.并列关系

```html
<head></head>
<body></body>
```

# 文档类型<!DOCTYPE>

~~~html
<!DOCTYPE html>
~~~

这句话就是告诉我们使用哪个html版本？  我们使用的是 html 5 的版本。  html有很多版本，那我们应该告诉用户和浏览器我们使用的版本号。

<!DOCTYPE> 标签位于文档的最前面，用于向浏览器说明当前文档使用哪种 HTML 或 XHTML 标准规范，必需在开头处使用<!DOCTYPE>标签为所有的XHTML文档指定XHTML版本和类型，只有这样浏览器才能按指定的文档类型进行解析。

注意：  一些老网站可能用的还是老版本的文档类型比如 XHTML之类的，但是我们学的是HTML5,而且HTML5的文档类型兼容很好(向下兼容的原则)，所以大家放心的使用HTML5的文档类型就好了。

# 字符集

<meta charset="UTF-8">

utf-8是目前最常用的字符集编码方式，常用的字符集编码方式还有gbk和gb2312。

gb2312 简单中文  包括6763个汉字

BIG5   繁体中文 港澳台等用

GBK包含全部中文字符    是GB2312的扩展，加入对繁体字的支持，兼容GB2312

UTF-8则包含全世界所有国家需要用到的字符

```
记住一点，以后我们统统使用UTF-8 字符集, 这样就避免出现字符集不统一而引起乱码的情况了。
```

# HTML标签的语义化

白话： 所谓标签语义化，就是指标签的含义。

## 为什么要有语义化标签  ※

1. 方便代码的阅读和维护

2. 同时让浏览器或是网络爬虫可以**很好地解析**，从而更好分析其中的内容 

3. 使用语义化标签会具有更好地搜索引擎优化 


核心：合适的地方给一个最为合理的标签。

语义是否良好： 当我们去掉CSS之后，网页结构依然组织有序，并且有良好的可读性。

不管是谁都能看懂这块内容是什么。

遵循的原则：先确定语义的HTML ，再选合适的CSS。

# HTML标签

### 标题标签 (熟记)

 单词缩写：  head   头部. 标题 

为了使网页更具有语义化，我们经常会在页面中用到标题标签，HTML提供了6个等级的标题，即

 <h1>、<h2>、<h3>、<h4>、<h5>和<h6>

~~~
标题标签语义：  作为标题使用，并且依据重要性递减
~~~

其基本语法格式如下：

```html
<hn>   标题文本   </hn>
```
> 注意：  h1 标签因为重要，尽量少用，不要动不动就向你扔了一个h1。 一般h1 都是给logo使用。

  <img src="media/dog.gif" />

### 段落标签( 熟记)

~~~html
<p>  文本内容  </p>
~~~

是HTML文档中最常见的标签，默认情况下，文本在一个段落中会根据浏览器窗口的大小自动换行。

### 水平线标签(认识)

```html
<hr />是单标签
```

### 换行标签(熟记)
```html
<br />
```

这时如果还像在word中直接敲回车键换行就不起作用了。

### div span标签(重点)
语法格式：

~~~html
<div> 这是头部 </div>    <span>今日价格</span>
~~~

## 文本格式化标签(熟记)

在网页中，有时需要为文字设置粗体、斜体或下划线效果，这时就需要用到HTML中的文本格式化标签，使文字以特殊的方式显示。

  b  i  s  u   只有使用 没有 强调的意思       strong   em  del   ins  语义更强烈

## 标签属性

```html
<标签名 属性1="属性值1" 属性2="属性值2" …> 内容 </标签名>
```

在上面的语法中，

1.标签可以拥有多个属性，必须写在开始标签中，位于标签名后面。

2.属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开。

3.任何标签的属性都有默认值，省略该属性则取默认值。

采取  键值对 的格式   key="value"  的格式  


## 图像标签img (重点)

```html
<img src="图像URL" />
```

## 链接标签(重点)

```html
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
```
 + 属性:href-->指定链接目标的url
        download-->指定下载文件的文件名
        target-->指定打开方式
        常见的值有：
          值	                描述
        view_window     第一次访问会新开一个窗口，如果窗口没有关闭，
                        再次打开一个链接会替换掉该窗口
        _blank	        在新窗口中打开被链接文档。
        _self	        默认。在相同的框架中打开被链接文档。
        _parent	        在父框架集中打开被链接文档。
        _top	        在整个窗口中打开被链接文档。
        framename	    在指定的框架中打开被链接文档。 

注意：

1.外部链接 需要添加 http:// www.baidu.com

2.内部链接 直接链接内部页面名称即可 比如 < a href="index.html"> 首页 </a >

3.如果当时没有确定链接目标时，通常将链接标签的href属性值定义为“#”(即href="#")，表示该链接暂时为一个空链接。

4.不仅可以创建文本超链接，在网页中各种网页元素，如图像、表格、音频、视频等都可以添加超链接。

### 锚点定位 （难点）

通过创建锚点链接，用户能够快速定位到目标内容。
创建锚点链接分为两步：

~~~html
1.使用“a href=”#id名>“链接文本"</a>创建链接文本。

2.使用相应的id名标注跳转目标的位置。
~~~

### base 标签

base 可以设置整体链接的打开状态   

base 写到  <head>  </head>  之间

 <img src="media/base.png" />



## 注释标签    

```html
    <!-- 注释语句 -->
```

注释内容不会显示在浏览器窗口中，但是作为HTML文档内容的一部分，也会被下载到用户的计算机上，查看源代码时就可以看到。


# 路径(重点、难点)

<img src="media/dt.png" />

<img src="media/lj.png" />

实际工作中，通常新建一个文件夹专门用于存放图像文件，这时再插入图像，就需要采用“路径”的方式来指定图像文件的位置。

路径可以分为： 相对路径和绝对路径

## 相对路径

1. 图像文件和HTML文件位于同一文件夹：只需输入图像文件的名称即可，如&lt;img src="logo.gif" /&gt;。
2. 图像文件位于HTML文件的下一级文件夹：输入文件夹名和文件名，之间用“/”隔开，如&lt;img src="img/img01/logo.gif" /&gt;。
3. 图像文件位于HTML文件的上一级文件夹：在文件名之前加入“../” ，如果是上两级，则需要使用 “../ ../”，以此类推，如&lt;img src="../logo.gif" /&gt;。

## 绝对路径

绝对路径

“D:\web\img\logo.gif”，或完整的网络地址，例如“http://www.itcast.cn/images/logo.gif”。





# 列表标签

## 无序列表 ul （重点）

无序列表的各个列表项之间没有顺序级别之分，是并列的。其基本语法格式如下：

```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ul>
```

```
 1. <ul></ul>中只能嵌套<li></li>，直接在<ul></ul>标签中输入其他标签或者文字的做法是不被允许的。
 2. <li>与</li>之间相当于一个容器，可以容纳所有元素。
 3. 无序列表会带有自己样式属性，放下那个样式，一会让CSS来！
```

## 有序列表 ol （了解）
列表即为有排列顺序的列表，其各个列表项按照一定的顺序排列定义，有序列表的基本语法格式如下：

```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ol>
```

## 自定义列表（理解）

定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。其基本语法如下：

```html
<dl>
  <dt>名词1</dt>
  <dd>名词1解释1</dd>
  <dd>名词1解释2</dd>
  ...
  <dt>名词2</dt>
  <dd>名词2解释1</dd>
  <dd>名词2解释2</dd>
  ...
</dl>
```

# 表格 table(会使用)

## 创建表格

在HTML网页中，要想创建表格，就需要使用表格相关的标签。创建表格的基本语法格式如下：

```html
<table>
  <tr>
    <td>单元格内的文字</td>
    ...
  </tr>
  ...
</table>
```
~~~
1.table用于定义一个表格。

2.tr 用于定义表格中的一行，必须嵌套在 table /table标签中，在 table /table中包含几对 tr /tr，就有几行表格。

3.td /td：用于定义表格中的单元格，必须嵌套在<tr></tr>标签中，一对 <tr> </tr>中包含几对<td></td>，就表示该行中有多少列（或多少个单元格）。
~~~

注意：

```
1. <tr></tr>中只能嵌套<td></td>
```

```
2. <td></td>标签，他就像一个容器，可以容纳所有的元素
```

## 表格结构（了解）

```
在使用表格进行布局时，可以将表格划分为头部、主体和页脚（页脚因为有兼容性问题，我们不在赘述），具体 如下所示：

<thead></thead>：用于定义表格的头部。

必须位于<table></table> 标签中，一般包含网页的logo和导航等头部信息。


<tbody></tbody>：用于定义表格的主体。

位于<table></table>标签中，一般包含网页中除头部和底部之外的其他内容。
``` 


# 表单标签(掌握)
```
  表单控件：

​       包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

  提示信息：

​        一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

  表单域：  

​      他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。
```
##  label标签(理解)

label 标签为 input 元素定义标注（标签）。

作用：  用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点

如何绑定元素呢？

for 属性规定 label 与哪个表单元素绑定。

```html
<label for="male">Male</label>
<input type="radio" name="sex" id="male" value="male">
```

## textarea控件(文本域)

如果需要输入大量的信息，就需要用到&lt;textarea&gt;&lt;/textarea&gt;标签。通过textarea控件可以轻松地创建多行文本输入框，其基本语法格式如下：

```html
<textarea cols="每行中的字符数" rows="显示的行数">
  文本内容
</textarea>
```

<img src="media/textarea.png" />

## 下拉菜单

使用select控件定义下拉菜单的基本语法格式如下

```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```

注意：

1. &lt;select&gt;</select&gt;中至少应包含一对&lt;option></option&gt;。
2. 在option 中定义selected =" selected "时，当前项即为默认选中项。

## 表单域

在HTML中，form标签被用于定义表单域，即创建一个表单，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器。创建表单的基本语法格式如下：

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

常用属性：

1. Action
   在表单收集到信息后，需要将信息传递给服务器进行处理，action属性用于指定接收并处理表单数据的服务器程序的url地址。
2. method
   用于设置表单数据的提交方式，其取值为get或post。
3. name
   用于指定表单的名称，以区分同一个页面中的多个表单。

注意：  每个表单都应该有自己表单域。

# HTML5新标签与特性

## 文档类型设定

- document
  - HTML:
  - XHTML:
  - HTML5

## 字符设定

- <meta http-equiv="charset" content="utf-8">：HTML与XHTML中建议这样去写
- <meta charset="utf-8">：HTML5的标签中建议这样去写

## 常用新标签

- header：定义文档的页眉
- nav：定义导航链接的部分
- footer：定义文档或节的页脚
- article：标签规定独立的自包含内容
- section：定义文档中的节（section、区段）
- aside：定义其所处内容之外的内容

## 常用新属性

| **属性******           | **用法******                               | **含义******                |
| -------------------- | ---------------------------------------- | ------------------------- |
| **placeholder******  | <input type="text" placeholder="请输入用户名"> | 占位符提供可描述输入字段预期值的提示信息      |
| **autofocus******    | <input type="text" autofocus>            | 规定当页面加载时 input 元素应该自动获得焦点 |
| **multiple******     | <input type="file" multiple>             | 多文件上传                     |
| **autocomplete****** | <input type="text" autocomplete="off">   | 规定表单是否应该启用自动完成功能          |
| **required******     | <input type="text" required>             | 必填项                       |
| **accesskey******    | <input type="text" accesskey="s">        | 规定激活（使元素获得焦点）元素的快捷键       |



## 新增的type属性值：

| **类型******       | **使用示例******            | **含义****** |
| ---------------- | ----------------------- | ---------- |
| **email******    | <input type="email">    | 输入邮箱格式     |
| **tel******      | <input type="tel">      | 输入手机号码格式   |
| **url******      | <input type="url">      | 输入url格式    |
| **number******   | <input type="number">   | 输入数字格式     |
| **search******   | <input type="search">   | 搜索框（体现语义化） |
| **range******    | <input type="range">    | 自由拖动滑块     |
| **time******     | <input type="time">     |            |
| **date******     | <input type="date">     |            |
| **datetime****** | <input type="datetime"> |            |
| **month******    | <input type="month">    |            |
| **week******     | <input type="week">     |            |

## 综合案例

~~~html
<form action="">
  <fieldset>
    <legend>学生档案</legend>
    <label for="userName">姓名:</label>
    <input type="text" name="userName" id="userName" placeholder="请输入用户名"> <br>
    <label for="userPhone">手机号码:</label>
    <input type="tel" name="userPhone" id="userPhone" pattern="^1\d{10}$"><br>
    <label for="email">邮箱地址:</label>
    <input type="email" required name="email" id="email"><br>
    <label for="collage">所属学院:</label>
    <input type="text" name="collage" id="collage" list="cList" placeholder="请选择"><br>
    <datalist id="cList">
      <option value="前端与移动开发学院"></option>
      <option value="java学院"></option>
      <option value="c++学院"></option>
    </datalist><br>
    <label for="score">入学成绩:</label>
    <input type="number" max="100" min="0" value="0" id="score"><br>
    <label for="level">基础水平:</label>
    <meter id="level" max="100" min="0" low="59" high="90"></meter><br>
    <label for="inTime">入学日期:</label>
    <input type="date" id="inTime" name="inTime"><br>
    <label for="leaveTime">毕业日期:</label>
    <input type="date" id="leaveTime" name="leaveTime"><br>
    <input type="submit">
  </fieldset>
</form>
~~~



## 多媒体标签

- embed：标签定义嵌入的内容

- audio：播放音频

- video：播放视频


### 多媒体 embed（会使用）

embed可以用来插入各种多媒体，格式可以是 Midi、Wav、AIFF、AU、MP3等等。url为音频或视频文件及其路径，可以是相对路径或绝对路径。

因为兼容性问题，我们这里只讲解 插入网络视频， 后面H5会讲解 audio 和video 视频多媒体。 

```html
<embed src="http://player.youku.com/player.php/sid/XMTI4MzM2MDIwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
```
### 多媒体 audio

HTML5通过<audio>标签来解决音频播放的问题。

并且可以通过附加属性可以更友好控制音频的播放，如：

autoplay 自动播放

controls 是否显不默认播放控件

loop 循环播放



### 多媒体 video

HTML5通过<video>标签来解决音频播放的问题。

autoplay 自动播放

controls 是否显示默认播放控件

loop 循环播放

width 设置播放窗口宽度

height 设置播放窗口的高度
