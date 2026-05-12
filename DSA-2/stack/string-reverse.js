let str="swalih";
function reverse(str){
    let stack=[]
    for(let i of str){
        stack.push(i)
    }
    let result="";
    while(stack.length>0){
        result+=stack.pop();
    }
    return result
}
console.log(reverse(str))
