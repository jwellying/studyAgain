# 传统的MVC
## 观点一
view作为展示层、model作为数据层（包括业务逻辑的代码）、controller作为粘合层
+ control层的代码尽量少，才能实现更好的灵活性和复用性
-->当我们的model层的业务逻辑发生改变时，只需要将model层改变即可，
control只在model和view中扮演传递者的身份
## 观点二
model层是数据模型层(处理数据的增删改查) 提供数据
Views是视图层 (数据展示) 渲染数据
controller是控制层(处理业务逻辑) 调用数据渲染视图

-----------------------这是一条分割线-----------------------
[错误思维导向纠正：model层]
+ Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。
　　　　         通常模型对象负责在数据库中存取数据。

思来想去还是把自己绕的有点晕，换个角度来看
我们来看mvc在react中的实现、mvvm在vue中的实现

**首先需要明确整个前端是作为view层存在的**
**无论是vue还是react都是作为view层渲染库**
# 从react中看MVC
既然react是view层渲染库，那么react主要的任务就是专注于view层的呈现；
当我们在前端响应用户的某些操作时，其实从本质上看，用户的操作引发的是model的改变，
![model的变化传递给view的变化，view的变化是对model变化的一种响应]

那么view的变化我们一般是怎么实现的呢？
方法一、
追溯到jquery时代，当我们需要改变view的时候，通常是通过dom操作来实现的；
```js
btn.addEventListener('onclcik',function(){
    app.innerHTML = '<h1>changed</h1>'
})
```
但是由于这种方法的种种弊端，我们需要寻求更好方法
方法二、
mvc的方式去处理这段逻辑又该怎么做呢？
```js
    change(){
        this.setState({
            text:'changed'
        })
    }
```
我们可以很清楚的看到我们不再对dom进行操作，我们通过control层对数据进行更新，然后又通过control层来
通知view自己进行更新

jquery是基于编程式思想，考虑的是对谁进行操作、进行什么样的操作，所以jq需要进行dom操作
mvc是基于声明式思想，只关心数据的改变

[react中的mvc]('../QA/mvc.png')
        

# vue中的mvvm
再来看mvvm模式
view视图层，model数据逻辑层，viewmodel作为二者的中间层，起着至关重要的作用
viewmodel需要处理view层上用户的交互行为；
同时将view层需要的数据暴露出来；(vue中通过数据劫持的方式，将model层的数据绑定到view上)

+ 降低了model和view的耦合度
+ 调试方面更加方便