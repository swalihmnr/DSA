// stack implementation using array

let statck=[];
function push(data){
    for(let i of data){
        statck.push(i)
    }
}
function pop(){
    if(statck.length===0){
        console.log('stack is empty');
    }
    return statck.pop();
}
function peek(){
    return stack[statck.length-1]
}
function display(){
    return [...statck]
}

// stack creating by linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null;
        size=0;
    }
   push(data){
    let newNode=new Node(data);
    newNode.next=this.top
    this.top=newNode;
   }
    
   pop(){
    if(!this.top){
        console.log('stack is underoverflow')
        return 
    }
    let rem=this.top.data
    this.top=this.top.next
    this.size--
    return rem
   }
   peek(){
    return this.top.data
   }
    getSize(){
        return this.size
    }
    display (){
        let curret=this.top;
        while(curret){
            console.log(curret.data);
            curret=curret.next
        }
    }
}

// stack implemented by class 


class Stack{
    constructor(){
        this.stack=[];
    }
    push(i){
        this.stack.push(i)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
}
function reverse1(str){
    let stack1=new Stack()
    for(let i of str){
        stack1.push(i)
    }
    let result="";
    while(stack1.stack.length>0){
        result+=stack1.pop()
    }
    return result
}
console.log(reverse1("subair"))

// stack implementation using two queues
class stack{
    constructor(){
        this.queue1=[];
        this.queue2=[];
    }
    push(x){
        this.queue2.push(x);
        while(this.queue1.length>0){
            this.queue2.push(this.queue1.shift());
        }
        let temp=this.queue1;
        this.queue1=this.queue2;
        this.queue2=temp
    }
    pop(){
        if(this.queue1.length===0){
            console.log('underflow');
        }
        this.queue1.shift();
        return this.queue1
    }

}
const s=new stack();
s.push(10)
s.push(20)
s.push(30)
s.push(50)
console.log(s.pop())
