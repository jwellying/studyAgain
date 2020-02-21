//通过split可以进行字符串分割
//传参为分割符
//返回一个数组
var string = 'hello my dear friend';
var arr = string.split(' ');
for(var i = 0;i<arr.length;i++){
    console.log(`这是第${i+1}项：${arr[i]}`);
}