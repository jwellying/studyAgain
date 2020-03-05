# JS基础
## 变量
+ var：全局变量（存在变量提升）
+ let：块级变量（不存在变量提升）
+ const：常量（不允许改变）

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

## 浅拷贝和深拷贝
拷贝，简单说就是copy，深拷贝和浅拷贝的区别就在于：B拷贝了A，
如果是浅拷贝，那么A改变B也会改变；
如果是深拷贝，那么A改变B不会改变；
**有一点需要注意的是我们考虑的深浅拷贝一般是针对复杂数据类型的**
复杂数据类型由于他的实际是存储在堆中，栈中知识存储了对值的引用（或者说是地址），
由此引出深浅拷贝的区别：浅拷贝-->A和B指向同一个内存地址
                      深拷贝-->B有自己的内存地址
### 深拷贝的实现方式
```js
     // 方法一、通过JSON.stringify() 
        // 这种方法虽然可以实现数组或对象深拷贝，但不能处理函数
        var obj = {
            name:'jack',
            gender:'男',
            children:{
                name:'mike'
            }
        }
        var obj2 = JSON.parse(JSON.stringify(obj));
        obj.name='rose';
        console.log(obj,obj2);
        obj.children.name = 'lily';
        console.log(obj,obj2);
    // 方法二、手写递归   _:3)] <)_
        function deepCopy(obj1){
            // 判断是一个数组还是一个对象
            var obj2 = Array.isArray(obj1)?[]:{};
            // 不为空且为数组或对象
            if(obj1&&typeof obj1==='object'){
                 // 遍历
                 for(let i in obj1){
                     if(obj1.hasOwnProperty(i)){
                        if(obj1[i]&&typeof obj1[i]==='object'){
                            obj2[i] = deepCopy(obj1[i]);
                        }else{
                            obj2[i] = obj1[i];
                        }
                     }
                 }
            }
            return obj2;
        }
```









## 作用域及作用域链
作用域就是代码的执行环境，全局执行环境就是全局作用域，函数的执行环境就是私有作用域，它们都是栈内存。
+ 在 Web 浏览器中，全局执行环境被认为是 window 对象，因此所有全局变量和函数都是作为 window 对象的属性和方法创建的。
+ 在 NODE 环境中，全局执行环境是 global 对象。

某个执行环境中所有的代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退出时，如关闭浏览器或网页，才会被销毁）

每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将被环境弹出，把控制权返回给之前的执行环境。ECMAScript 程序中的执行流正是由这个方便的机制控制着。

内部环境可以通过作用域链访问所有外部环境，但外部环境不能访问内部环境的任何变量和函数。
根据这个机制，在查找变量的时候就会产生一条作用域链；
例子
```js
        function fn4(f){
            f();
            var name = 'mike';
        }
        fn4(function(){
            // var name = 'jack';
            console.log(name);
            //报错
            //分析age变量
            //1.查找当前作用域，无法找到
            //2.查找上一级作用域，上一级作用域是谁呢
            //3.上一级作用域不是看谁调用它，而是看它在哪里编写
            // 所以会直接找到window全局
        })
```

## 数组API
+ concat()	连接两个或更多的数组，并返回结果。
    **array1.concat(array2,array3,...,arrayX)**
+ copyWithin()	从数组的指定位置拷贝元素到数组的另一个指定位置中。
    **array.copyWithin(target, start, end)**
+ every()	检测数值元素的每个元素是否都符合条件。
+ some()	检测数组元素中是否有元素符合指定条件。
 ``` js
   array.every((item,index,arr)=>{
       return item>1;
    })
```
+ filter()	            检测数值元素，并返回符合条件所有元素的数组。
+ find()	            返回符合传入测试（函数）条件的数组元素。
+ findIndex()	        返回符合传入测试（函数）条件的数组元素索引。
+ forEach()	            数组每个元素都执行一次回调函数。
+ includes()	        判断一个数组是否包含一个指定的值。
+ indexOf()	            搜索数组中的元素，并返回它所在的位置。
+ isArray()	            判断对象是否为数组。
+ instanceof()          类型判断
+ join()	            把数组的所有元素放入一个字符串。
+ keys()	            返回数组的可迭代对象，包含原始数组的键(key)。
+ lastIndexOf()	        搜索数组中的元素，并返回它最后出现的位置。
+ map()	                通过指定函数处理数组的每个元素，并返回处理后的数组。
+ pop()	                删除数组的最后一个元素并返回删除的元素。
+ push()	            向数组的末尾添加一个或更多元素，并返回新的长度。
+ reduce()	            将数组元素计算为一个值（从左到右）。
+ reduceRight()	        将数组元素计算为一个值（从右到左）。
+ reverse()	            反转数组的元素顺序。
+ shift()	            删除并返回数组的第一个元素。
+ slice()	            选取数组的的一部分，并返回一个新数组。
+ sort()	            对数组的元素进行排序。
+ splice()	            从数组中添加或删除元素。
+ toString()	        把数组转换为字符串，并返回结果。
+ unshift()	            向数组的开头添加一个或更多元素，并返回新的长度。
+ valueOf()	            返回数组对象的原始值。


## 函数API
### 函数中的arguments
```js
function initTest() {
            for (var i=0;i<arguments.length;i++){
                // arguments是函数的变量
                console.log(arguments);
                // 而callee指向的就是该函数本身
                console.log(arguments.callee.name)
            }
        }
```
**引入callee的好处**
+ 降低与函数的耦合，函数名不必出现在函数内部
### 深入解析函数中的this指向（容易和变量查找混淆）
**变量查找看函数在什么地方声明**
而决定this指向的因素有很多：
+ 函数的调用方式
1、函数调用->this指向window
2、方法调用->this指向obj
3、new方法->this指向obj
4、call\apply\bind绑定this指向
+ 当是使用call方法调用函数时
+ 如果第一个参数是对象类型，那么函数的this指向该对象
+ 如果是null、undefined类型，那么函数的this指向window对象
+ 如果是数字、布尔值、字符串，则this指向对应的构造函数的实例
```js
    var xw = {
            name : "小王",
            gender : "男",
            age : 24,
            say : function(school,grade) {
                    alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
            }
        }
        var xh = {
                name : "小红",
                gender : "女",
                age : 18
        }
        xw.say.call(xh,"新中","五年级");
        xw.say.apply(xh,["江中","五年级"]);
```
**call和apply使用基本相同，唯一不同apply传入参数以数组的方式；call和apply立刻执行**
**bind不会立刻执行而是返回一个函数**
+ bind绑定this指向
```js
    var obj={
            age:15,
            run:function(){
                console.log(this);
                setTimeout((function(){
                    console.log(this.age);
                }).bind(this),50)
            }
        }
```
+ 默认setTimeout函数的this执行window，使用bind后this指向obj
5、es6的箭头函数中this的指向
this指向不确认由上级作用域决定

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

## 函数的原型链与继承
### 普通对象与函数对象
在JS中万物皆是对象，当然对象也分为**普通对象和函数对象**
**Object和Function是JS自带的函数对象**
当我们new一个function的时候，我们可以发现，它自带了一个prototype属性；
而当我们new一个object的时候，他的原型实例是通过__proto__来进行访问的；
**由此我们可以知道只有通过Function构造的才是函数对象，才能通过prototype属性访问到其原型实例**
**而其他的产生对象都是一个普通对象，我们只能通过__proto__访问其原型实例**
```js
    // Person是一个函数对象
    function Person(name,height){
            this.name = name;
            this.height = height;
        }
    // person是一个普通对象
    var person = new Person('jsck',180);
    console.log(Person.prototype);
    console.log(person.__proto__);
    // 以下全为true
    console.log(Person.prototype);
    console.log(person.__proto__);
    console.log(Person.prototype==person.__proto__);
    console.log(Person.prototype.constructor===Person);
    console.log(person.__proto__.constructor===Person);
    console.log(Person.prototype.__proto__===Object.prototype);
    console.log(Object.__proto__===null);
     // 比较特殊
    console.log(Function.prototype);     
        
```
### 继承的四种方式
见文件
**补充细节点**
在for...in或者直接in遍历时，会把原型上的属性方法一同遍历出来
而使用hasOwnProprety检测本身的属性和方法

## 闭包
### 什么是闭包
 + 闭包就是函数里面嵌套函数，让外部可以访问到函数内部变量（函数作用域）
 ### 闭包的应用场景
 + 1、模仿块级作用域，防止变量命名冲突
 + 2、保存变量（函数内的变量一旦函数调用结束后，会自动注销）
 + 3、保护私有变量（那么私有变量可以改变吗？可以，通过权限管理的方法，进行验证然后更改）
 ### 闭包的内存泄漏
 ```js
    function fn(){
                var a = 5;
                return function(){
                    a++;
                    console.log(a);
                }
            }
            var f1=fn();
            //释放变量内存,需要手动释放变量
            f1=null;
 ```

