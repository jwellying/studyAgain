//process 是一个全局变量，是一个对象，可以通过属性值来获取相应的环境变量的值
//console.log(process.env);
//process.env返回一个环境变量
//我们可以根据环境变量作相应判断
let identity = process.env.Test;
// console.log(identity);
if(identity==='jwellying'){
    console.log('这是我的爱机');
}else{
    console.log('who are you?');
}
