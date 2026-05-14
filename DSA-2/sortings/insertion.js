let arr=[3,5,9,2,7];
function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let current=arr[i];
        let j=i-1;
        while(j>=0&&arr[j]>current){
            arr[j+1]=arr[j]
        }
        arr[j+1]=current
    }
}
console.log(arr)