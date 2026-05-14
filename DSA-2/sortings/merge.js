let arr = [5,2,4,1];
function mergest(arr){
    if(arr.length<2){{
        return arr
    }}
    let mid =arr.length/2;
    let left =mergest(arr.slice(0,mid))
    let right=mergest(arr.slice(mid))
   return  merge(left,right)
    

}
function merge(leftArr,rightArr){
    let i =0,j=0,k=0;
    let res=[]
    while(i<leftArr.length&&j<rightArr.length){
        if(leftArr[i]<rightArr[j]){
            res[k++]=leftArr[i++]
        }else{
            res[k++]=rightArr[j++]
        }
    }
    while(i<leftArr.length){
        res[k++]=leftArr[i++]
    }
    while(j<rightArr.length){
        res[k++]=rightArr[j++]
    }
return res
}
console.log(mergest(arr))