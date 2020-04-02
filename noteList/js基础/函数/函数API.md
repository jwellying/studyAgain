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

