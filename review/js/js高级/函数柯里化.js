// 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数
// 转换成一系列使用一个参数的函数的技术。
function add(a,b){
    return a+b;
}
// console.log(add(1,2));
// // 如果有了函数柯里化，我们希望函数是这样的
// let addCurry = curry(add);
// addCurry(1)(2);


// 第一版
// 柯里化
var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    console.log(args);
    // 返回一个函数，自调用函数
    return function() {
        // 将之前的参数与新传入的参数进行拼接
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};

var addCurry = curry(add, 1, 2);
addCurry() 


