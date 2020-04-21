// 选择排序
// 思想：遍历找出最小的，与第一位交换
// 以此类推
function select(arr){
    for(let i = 0,len=arr.length;i < len-1;i++){
        for(let j = i+1,len = arr.length;j < len;j++){
            let minIndex = i;
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
            swap(arr,i,minIndex);
        }
    }
    return arr;
}
function swap(arr,i,j){
    let s = arr[i];
    arr[i] = arr[j];
    arr[j] = s;
}

// 测试
let arr = [15,42,24,56,9,30,4,24];

console.log(select(arr));
