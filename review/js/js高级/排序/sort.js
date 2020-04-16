// sort的排序按照数据转换为字符串后的unicode先后排序
const arr = [1, 20, 10, 30, 22, 12, 100, 50];
console.log(arr.sort());   
// 所以结果为
//[ 1, 10, 100, 11, 12, 20, 22, 24, 30, 31, 50, 55, 88 ]
// 当我们为其制定比较规则时，他可以通过我们制定的方式进行比较
console.log(arr.sort((item1, item2) => item1 - item2)); 
//[ 1, 10, 11, 12, 20, 22, 24, 30, 31, 50, 55, 88, 100 ]
