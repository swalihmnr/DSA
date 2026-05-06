let arr=[1,2,1,3,2,4,3,1,3]
freq={};
for(let i =0;i<arr.length;i++){
    let count=1;
    if(arr[i]===-1) continue
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
                count++
            arr[j]=-1
        }
        
    }
    console.log(count)
    freq[arr[i]]=count
}
console.log(freq)
