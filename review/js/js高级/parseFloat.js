// let arr = ['1','2','3'];
// 输出 [1,2,3]
console.log(['1','2','3'].map(parseFloat));
// 输出 [1,NaN,NaN]
console.log(['1','2','3'].map(parseInt));
// 为什么呢？
// 这是因为在遍历的时候map回调函数的第二个参数[索引值]
// 被当做参数传给parseFloat(value,radix)
// radix的值
// parseInt('1', 0)：radix的值为0，判断字符串发现介于1~9，用10进制转换，结果为1.
// parseInt('2', 1)：radix的值为1，如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
// parseInt('3', 2): radix的值为2，这就意味着字符串将被解析成二进制，也就是仅仅包含数值0和1。
// parseInt的规范指出，它仅尝试分析第一个字符的左侧。这个字符串的第一个字符是“3”，不符合二进制，返回NaN

// 结果为['1']
// 这与filter的功能有关
// filter是一个过滤器
// 回调函数后执行后会返回true or false
// 根据返回值，决定新的数组的内容
// parseInt之后[1,NaN,NaN],则返回[true,false,false]
// 故结果为['1']
console.log(['1','2','3'].filter(parseInt));


