let arr=[12,34,56,33,23,33,12,12]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            arr[j]=-1
        }
    }
}
for(let value of arr){
    if(value!==-1){
        console.log(value)
    }
}