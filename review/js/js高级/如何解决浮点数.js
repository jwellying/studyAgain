let a = 0.1;
let b = 0.2;
let c = 0.3;
console.log(a+b);
console.log(a+b == c);

function compareNumber(num1,num2){
    if(Math.abs(num1-num2)<Number.EPSILON){
        return true;
    }
}

console.log(compareNumber(a+b,c));

// 但是上面只实现了计算的问题
// 要想要计算该怎么办呢？
function add(num1,num2) {
    return parseFloat(num1+num2).toFixed(10);
}
 let sum = add(0.1,0.2);
 if(sum == 0.3){
     console.log('相等');
     
 }else{
     console.log('不相等');
     
 }

// console.log(typeof (1+'0.5'));
// tofixed方法
// MDN的介绍：定点法来格式化一个
console.log(parseFloat(2.8856).toFixed(2));
console.log(parseFloat(2.555).toFixed(2));
console.log(parseFloat(2.55).toFixed(1));



 

