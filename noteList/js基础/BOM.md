# BOM
## window对象
**大小坐标**
innerHeight	    返回窗口的文档显示区的高度。
innerWidth	    返回窗口的文档显示区的宽度。
outerHeight	    返回窗口的外部高度，包含工具条与滚动条。
outerWidth	    返回窗口的外部宽度，包含工具条与滚动条。
pageXOffset	    设置或返回当前页面相对于窗口显示区左上角的 X 位置。
pageYOffset	    设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
screenLeft	    返回相对于屏幕窗口的x坐标
screenTop	    返回相对于屏幕窗口的y坐标
screenX	        返回相对于屏幕窗口的x坐标
screenY     	返回相对于屏幕窗口的y坐标
**窗口信息**
defaultStatus	设置或返回窗口状态栏中的默认文本。
frames	        返回窗口中所有命名的框架。该集合是Window对象的数组，每个window对象在窗口中含有一个框架。
length	        设置或返回窗口中的框架数量。
name	        设置或返回窗口的名称。
status	        设置窗口状态栏的文本。
closed	        返回窗口是否已被关闭。
opener	        返回对创建此窗口的窗口的引用。
self	        返回对当前窗口的引用。等价于 Window 属性。
parent	        返回父窗口。
top	            返回最顶层的父窗口。
**存储**
localStorage	在浏览器中存储 key/value 对。没有过期时间。
sessionStorage	在浏览器中存储 key/value 对。 在关闭窗口或标签页之后将会删除这些数据。