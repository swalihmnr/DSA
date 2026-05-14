let arr=[1,4,6,2,9,6,0];
function partition(arr,lb,ub){
    let pivot=arr[lb]
    let start=lb;
    let end=ub;
    while(start<end){
        while(arr[start]<=pivot){
            start++
        }
        while(arr[end]>pivot){
            end--
        }
        if(start<end){
            [arr[start],arr[end]]=[arr[end],arr[start]]
        }
    }
    [arr[lb],arr[end]]=[arr[end],arr[lb]]
    return end
}
function quickSort(arr,lb,ub){
    if(lb<ub){
        let loc=partition(arr,lb,ub)
        quickSort(arr,lb,loc-1);
        quickSort(arr,loc+1,ub)
    }
    return arr
}
console.log(quickSort(arr,0,6))