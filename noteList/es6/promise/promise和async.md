# promise和async的优劣
async 函数，就是 Generator 函数的语法糖，它建立在Promises上，并且与所有现有的基于Promise的API兼容。

+ promise虽然脱离了回调地狱，但是then的链式调用阅读依然不便，而async/await更加像同步函数的实现
+ Promise传递中间值非常麻烦，而async/await几乎是同步的写法，非常优雅
+ 错误处理友好，async/await可以用成熟的try/catch，Promise的错误捕获非常冗余
+ 调试友好，Promise的调试很差，由于没有代码块，你不能在一个返回表达式的箭头函数中设置断点，如果你在一个.then代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的.then代码块，因为调试器只能跟踪同步代码的『每一步』。

同时async封装了promise，那么他在封装后究竟会怎么做呢？
```js

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()

// 输出结果
async2 end
async1 end
```
例子本身十分简单，但是我们需要知道async究竟做了什么转换
首先，async/await 在底层转换成了 promise 和 then 回调函数。
每次我们使用 await, 解释器都创建一个 promise 对象，然后把剩下的 async 函数中的操作放到 then 回调函数中。
所以上面那段代码就转换为：
```js
new Promise(){
    console.log('async2 end')
}
.then(()=>{
    console.log('async1 end ')
})
```
