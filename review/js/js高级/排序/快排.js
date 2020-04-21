function findIndex(arr,low,high){
    let temp = arr[low];
    while(low<high){
        while(low<high&&arr[high]>=temp){
            high--;
        }
        arr[low] = arr[high];
        while(low<high&&arr[low]<=temp){
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = temp;
    return low;
}


function quickSort(arr,low,high){
    if(low<high){
        let index = findIndex(arr,low,high);
        // console.log(index);
        quickSort(arr,0,index-1);
        quickSort(arr,index+1,high);
    } 
    return arr;
}

let arr = [12,3,24,21,45,25,93,78];
let len = arr.length-1;
let low = 0;
let high = len;
console.log(quickSort(arr,low,high));
