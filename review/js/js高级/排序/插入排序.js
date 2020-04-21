function insert(){
    for(let i = 1,len = arr.length;i < len;i++){
        for(let j = i-1;j >= 0;j--){
            
            if(arr[j]>arr[j+1]){
                swap(arr,j+1,j); 
            }
        }
    }
    function swap(arr,i,j){
        let s = arr[i];
        arr[i] = arr[j];
        arr[j] = s;
    }
    return arr;
}
let arr = [14,90,3,39,66,45,10];
console.log(insert(arr));
