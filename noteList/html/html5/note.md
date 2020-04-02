
# HTML5新标签与特性

# API总览
 1. 拖拽释放(Drag and drop) API

 2. 语义化更好的内容标签（header,nav,footer,aside,article,section）

 3. 音频、视频API(audio,video)

 4. 画布(Canvas) API

 5. 地理(Geolocation) API

 6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

 7. sessionStorage 的数据在浏览器关闭后自动删除

 8. 表单控件，calendar、date、time、email、url、search  

 9. 新的技术webworker, websocket, Geolocation

## 字符设定

- <meta charset="utf-8">：HTML5新增了charset属性，用于指定字符编码格式

## 常用新标签

- header：定义文档的页眉
- nav：定义导航链接的部分
- footer：定义文档或节的页脚
- article：标签规定独立的自包含内容
- section：定义文档中的节（section、区段）
- aside：定义其所处内容之外的内容

## 语义化标签
header、footer、aside、section、nav、article
+ 优点：
    增强代码的可读性，有利于代码的维护
    有利于SEO，支持读屏软件
    对于富文本类的网站的优势比较明显

## 常用新属性

| **属性******         | **用法******                              | **含义******                |
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


## 多媒体标签

- embed：标签定义嵌入的内容

- audio：播放音频

- video：播放视频


### 多媒体 embed（会使用）

embed可以用来插入各种多媒体，格式可以是 Midi、Wav、AIFF、AU、MP3等等。url为音频或视频文件及其路径，可以是相对路径或绝对路径。

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

