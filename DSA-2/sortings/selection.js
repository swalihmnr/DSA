let arr=[3,5,9,2,7];
for(let i =0;i<arr.length;i++){
    let minIndex=i;
    for(let j =i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }
    [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
}
console.log(arr)