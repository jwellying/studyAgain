### null和undfined区别
1. 首先我们从类型检测的角度出发

```js
    // undefined和null并不严格相等，因为他们的值不同
    console.log(undefined === null); //false
    // undefined和null都为false，所以不严格相等
    console.log(undefined == null); //true
```
null的检测类型是object，undefined检测类型undefined

2. 转换为数字时

```js
    console.log(Number(null)); //0
    console.log(Number(undefined)); //NaN
```
null强制转换为数字时我们得到的是0，而undefined强制转换为数字时得到是NaN

3. 使用场景
null：
- 作为函数参数表示该参数不为对象
- 原型链的终点
undefined：
- 已经声明的变量，但是没有赋值
- 对象未赋值的属性
- 函数没有定义返回值，默认为undefined

### 补充历史
js最开始只有null的定义，没有undefined，但是试想我们通过再进行一些操作时，如发生类型不匹配的问题，
js会自动转换，这时候可能null会转换为0，造成难以发现的错误
```js
    // 3
    console.log(1+2+null);
    // NaN
    console.log(1+2+undefined);
```
[参考链接：廖老师的网络日志]