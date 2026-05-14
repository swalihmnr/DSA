class Stack{
    constructor(){
        this.stack=[]
    }
    isInclude(x){
        for(let i=0;i<this.stack.length;i++){
            if(this.stack[i]===x){
                return true
            }
        }
        return false
    }
    push(x){
        if(this.isInclude(x)){
            return console.log('duplicate does not allowed!');
        }
        this.stack.push(x)
    }
    pop(){
        if(this.stack.length===0){
            return console.log('it is underflow');
        }
        this.stack.pop();
        return this.stack
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
}
