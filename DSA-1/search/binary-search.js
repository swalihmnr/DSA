let arr = [5,7,7,8,8,10];
let target = 5;
let left =0;
let first =-1;
let last =-1;
let right =arr.length-1;
while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(arr[mid]===target){
        console.log(`first occurence :${mid}`);
        first=mid
        break
    }else if (arr[mid]<target){

        left =mid-1
    }else{
        right=mid+1
    }
}
left =0;
while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(arr[mid]===target){
        console.log(`first occurence :${mid}`);
        last =mid
        break
    }else if (arr[mid]<target){

        left =mid+1
    }else{
        right=mid-1
    }
}
console.log(`last elem:${last} ,fist elem:${first}`)