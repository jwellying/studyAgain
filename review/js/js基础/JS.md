# JS基础
## 变量
+ var：全局变量（存在变量提升）
+ let：块级变量（不存在变量提升）
+ const：常量（不允许改变） 同样作用于块级

## 数据类型
+ 简单数据类型
    + number
    + string
    + null 
    + undefined
    + boolean
+ 复杂数据类型
    + Array
    + Function
    + object
    + Date
    + RegExp(正则)
**内存中的堆和栈**
简单数据类型存储在栈中，传递时按值传递；
复杂数据类型存储在堆中，栈中存储的其在堆中的地址；且传递时按引用传递；

**数据类型转换**
+ Number转换
Number('00021')     //21
Number('string')    //NaN
Number('')          //NaN
Number(2323344)     //2323344
Number(true)        //1 false:0
+ parseInt转换
var num1 = parseInt("1234blue");    // 1234 
var num2 = parseInt("");            // NaN 
var num4 = parseInt(22.5);          // 22 
+ parseFloat转换
var num1 = parseFloat("1234blue");      //1234 
var num3 = parseFloat("22.5");          //22.5 
var num4 = parseFloat("22.34.5");       //22.34 
var num5 = parseFloat("0908.5");        //908.5 
var num6 = parseFloat("3.125e7");       //31250000
+ toString()转换
var value1 = 10; 
var value2 = true; 
var value3 = null; 
var value4; 
alert(String(value1));      // "10" 
alert(String(value2));      // "true" 
alert(String(value3));      // "null" 
alert(String(value4));      // "undefined"



## 字符串API

+ charAt()	                返回在指定位置的字符。
+ charCodeAt()	            返回在指定的位置的字符的 Unicode 编码。
+ concat()	                连接两个或更多字符串，并返回新的字符串。
+ fromCharCode()	        将 Unicode 编码转为字符。
+ indexOf()	                返回某个指定的字符串值在字符串中首次出现的位置。
+ includes()	            查找字符串中是否包含指定的子字符串。
+ lastIndexOf()	            从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
+ match()	                查找找到一个或多个正则表达式的匹配。
+ repeat()	                复制字符串指定次数，并将它们连接在一起返回。
+ replace()	                在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
+ search()	                查找与正则表达式相匹配的值。
+ slice()	                提取字符串的片断，并在新的字符串中返回被提取的部分。
+ split()	                把字符串分割为字符串数组。
+ startsWith()	            查看字符串是否以指定的子字符串开头。
+ substr()	                从起始索引号提取字符串中指定数目的字符。
+ substring()	            提取字符串中两个指定的索引号之间的字符。
+ toLowerCase()	            把字符串转换为小写。
+ toUpperCase()	            把字符串转换为大写。
+ **trim()**	            去除字符串两边的空白
+ valueOf()	                返回某个字符串对象的原始值。
+ toString()	            返回一个字符串。


## Math对象：
+ min()                     最小值
+ max()                     最大值
+ ceil()                    向上取整
+ floor()                   向下取整
+ round()                   四舍五入
+ random()                  随机数
+ abs(x)	                返回 x 的绝对值
+ sqrt(x)	                返回数的平方根
+ pow(x,y)	                返回 x 的 y 次幂

**细节点**
1、转换为数值：parseInt()专门用于把字符串转换成数值,Number()用于任何类型；
2、非字符转换成字符：toString()；
3、数组转成字符：join()；
4、字符串转换成数组：split()；


 ## null和undefined的区别
 null代表为空，表示这里不应该有值出现，一个对象可以为空，同时null本身也是一个对象
 undefined代表未定义，它可能表达存在的空值，也可能就是不存在，至于究竟是否存在只有在运行时才能知道
 (可以联想js的预解析和逐行解析时变量的状态)

 ##  优雅降级和渐进增强
优雅降级：一开始就构建站点的完整功能，然后 针对浏览器测试和修复 。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览**降序**
渐进增强：一开始就针对低版本浏览器进行构建页面，完成基本功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。**升序**

