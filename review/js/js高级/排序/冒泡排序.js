// 冒泡排序
// 思想:最大的沉底，最小的上浮
let array = [1,20,38,12,67,45,39];
function bubbleSort(array){
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1-i; j++) {
            if(array[j]>array[j+1]){
                swap(array,j,j+1)
            }
        }
    }
    return array;
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(arr);

//冒泡排序的时间复杂度是O(n^2)
//辅助空间为常数，所以空间复杂度为O(1)
// 但是冒泡排序的时间复杂度太大
// 我们可以如何进行优化呢
// 通过标志位的方式让大部分的情况的时间复杂度变为o(n)
function bubbleSort(array){
    for (let i = 0; i < array.length-1; i++) {
        let flag = false;
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
                flag = false;
            } 
        }
        if(!flag){
            break;
        }
    }
    
}