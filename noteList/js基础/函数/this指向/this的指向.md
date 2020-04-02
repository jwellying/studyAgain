# this的指向问题
this的指向总是让我们晕头转向
简单梳理一下：
## 深入解析函数中的this指向（容易和变量查找混淆）
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
**this的指向不是在声明的时候确定的，而是在执行的时候确定的**
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