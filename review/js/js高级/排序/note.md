## 排序算法总结
### Array.prototype.sort(cf)
+ compareFunction 可选
用来指定按某种顺序进行排列的函数。如果省略，**元素按照转换为的字符串的各个字符的Unicode位点进行排序**
+ firstEl
第一个用于比较的元素。
+ secondEl
第二个用于比较的元素。

### 算法的稳定性
比较是相邻的两个元素比较，交换也发生在这两个元素之间。当数列中的相同元素(例如Ai=Aj)在排序后，两者的顺序仍不变(i在j之前)，则称算法是稳定的；
### 冒泡排序
冒泡排序的思想，大的数沉底，小的数上浮，所以排序的结果是一个递增序列

function bubble(arr){
    for(let i = 0,len = arr.length;i < len-1;i++){
        for(let j = 0,len = arr.length;j < len-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j);
            }
        }
    }
}
冒泡排序的平均时间排序是O(n^2),是一种稳定的排序方法
冒泡排序可以通过添加一个flag标志位进行优化，当进行完一趟遍历之后，
没有发生交换时，证明已经排序完成
- 最快：当已经是正序时
- 最慢：当数列是反序时

### 选择排序
选择排序的思想是，遍历选出最小的，交换元素

function select(arr){
    for(let i = 0,len = arr.length;i < len-1;i++){
        let minIndex = i;
        for(let j = i+1,len = arr.length;j < len;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
            swap(arr,i,minIndex)
        }
    }
}
选择排序的时间复杂度为O(n^2),不稳定


### 插入排序
思想：从第二个数开始向前比较交换

function insert(arr){
    for(let i = 1,len = arr.length;i < len;i++){
        for(let j = i-1;j >=0;j--){
            if(arr[j]>arr[j+1]){
                swap(arr,j+1,j);
            }
        }
    }
    return arr;
}
插入排序的时间复杂度为O(n^2),稳定的；

### 快速排序
快排的思想：
1. 指定low和high作为头尾标记，确定一个标准值，从尾开始比较high指向数值若大于标准值，
则high--，若小于标准值，则将其赋值给low,low++
2. low指向的数值若大于标准值，将low的值赋予high，high--；反之，low++
3. 重复1、2两步

快排的时间复杂度为O(nlogn),是一种快速的方法，不稳定；



