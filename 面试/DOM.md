# DOM
## document对象属性方法
document.addEventListener()             监听事件
document.createElement()	            创建元素节点。
document.createTextNode()	            创建文本节点。
document.domain	                        返回当前文档的域名。
document.getElementsByClassName()	    返回文档中所有指定类名的元素集合，作为 NodeList 对象。
document.getElementById()	            返回对拥有指定 id 的第一个对象的引用。
document.getElementsByName()	        返回带有指定名称的对象集合。
document.getElementsByTagName()	        返回带有指定标签名的对象集合。
document.images	                        返回对文档中所有 Image 对象引用。
document.querySelector()	            返回文档中匹配指定的CSS选择器的第一元素
document.querySelectorAll()	            返回文档中匹配的CSS选择器的所有元素节点列表
document.readyState	                    返回文档状态 (loading或completed)
document.removeEventListener()	        移除文档中的事件句柄

## dom对象方法属性
element.appendChild()	                为元素添加一个新的子元素
element.attributes	                    返回一个元素的属性数组
element.childNodes	                    返回元素的一个子节点的数组
element.children	                    返回元素的子元素的集合
element.classList	                    返回元素的类名，作为 DOMTokenList 对象。
element.className	                    设置或返回元素的class属性
element.firstChild	                    返回元素的第一个子节点
element.focus()	                        设置文档或元素获取焦点
element.getAttribute()	                返回指定元素的属性值
element.getAttributeNode()	            返回指定属性节点
element.getElementsByTagName()	        返回指定标签名的所有子元素集合。
element. getElementsByClassName()	    返回文档中所有指定类名的元素集合，作为 NodeList 对象。

## nodeType
如果节点是一个元素节点，nodeType 属性返回 1。 html标签

如果节点是一个属性节点, nodeType 属性返回 2。 属性

如果节点是一个文本节点，nodeType 属性返回 3。 文本

如果节点是一个注释节点，nodeType 属性返回 8。 注释

## window对象的事件
+ onload                    页面结束加载之后触发。
+ onresize                  当浏览器窗口被调整大小时触发。
+ onunload                  一旦页面已下载时触发（或者浏览器窗口已被关闭）。

## Form 事件
+ onblur	    script	    元素失去焦点时运行的脚本。
+ onchange	    script	    在元素值被改变时运行的脚本。
+ onfocus	    script	    当元素获得焦点时运行的脚本。
+ oninput	    script	    当元素获得用户输入时运行的脚本。
+ onsubmit	    script	    在提交表单时触发。
+ onformchange	script	    在表单改变时运行的脚本。
+ onforminput	script  	当表单获得用户输入时运行的脚本。
+ oncontextmenu	script	    当上下文菜单被触发时运行的脚本。
+ oninvalid	    script	    当元素无效时运行的脚本。
+ onreset	    script	    当表单中的重置按钮被点击时触发。HTML5 中不支持。
+ onselect	    script	    在元素中文本被选中后触发。

## Mouse 事件
+ onclick	    script	    元素上发生鼠标点击时触发。
+ ondblclick	script	    元素上发生鼠标双击时触发。
+ ondrag	    script	    元素被拖动时运行的脚本。
+ onmousedown	script	    当元素上按下鼠标按钮时触发。
+ onmousemove	script	    当鼠标指针移动到元素上时触发。
+ onmouseout	script	    当鼠标指针移出元素时触发。
+ onmouseover	script	    当鼠标指针移动到元素上时触发。
+ onmouseup	    script	    当在元素上释放鼠标按钮时触发。
+ onmousewheel	script	    当鼠标滚轮正在被滚动时运行的脚本。
+ onscroll	    script	    当元素滚动条被滚动时运行的脚本。













## 自定义属性
+ data-*
```代码
    //html
    <div id="box" data-index="0" i="0"></div>

    //js
    var box = document.getElementById('box');
    console.log(box.dataset) //返回一个对象,里面包含了所有当前标签上用data-定义的属性
    console.log(box.dataset.index) //返回data-index 的值
```