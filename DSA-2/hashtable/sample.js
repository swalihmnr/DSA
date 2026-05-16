let str='hello';
let result=""
let res=[]
   for(let i of str){
    res.push(i);
   }
   while(res.length>0){
     result+=res.pop()
   }
   console.log(result)
