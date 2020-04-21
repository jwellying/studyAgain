let str = 'xyxxxzzzzzzzzzxy';
function findMax(str){
    let strMap = {};
    for(let i = 0,len = str.length;i < len;i++){
        if(strMap[str[i]]){
            strMap[str[i]]++;
        }else{
            strMap[str[i]] = 1;
        }
    }
    let sum = 0;
    let flag = '';
    for(let i in strMap){
        if(strMap[i] > sum){
            sum = strMap[i];
            flag = i;
        }
    }
    return flag;
}
console.log(findMax(str));