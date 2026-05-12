
// valid parandisis
let str="{()}";
function checker(str){
      let map = {
       ')' : '(',
       '}' : '{',
       ']' : '['
    }

    let stack=[];
    for(let i of str){
        if(i==='{'||i==='('||i==='['){
            stack.push(i);
        }else{
            if(stack.length===0||stack.pop()!==map[i]) return false
        }
    }
    return stack.length===0
}

//  Implement a MinStack that supports push, pop, top, and getMin in O(1)time. (Leetcode#155)

class stack{
    constructor(){
        this.stack=[];
        this.minStack=[];
    }
    push(data){
        this.stack.push(data);
        if(this.minStack.length===0||data<this.minStack[this.minStack.length-1]){
            this.minStack.push(data)
        }
    }
    pop(){
        if(this.stack.length==0){
            console.log('ti is underflow ')
            return 
        }
        let rem=this.stack[this.stack.length-1];
        this.stack.pop()
        if(rem===this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
        return this.stack
    }
    top(){
        return this.stack[this.stack.length-1];
    }
    getMin(){
        if(this.minStack.length===0){
            console.log('there is nothing');
        }
       return this.minStack[this.minStack.length-1];
    }
}
let s1=new stack()
s1.push(10);
s1.push(34);
s1.push(45);
console.log(s1.top())

// duplicate not allowed stack

class Stack{
    constructor(){
        this.stack=[]
    }
    push(x){
        if(this.stack.includes(x)){
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

// another way
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

// Check if a string is a palindrome using a stack.

function isPalidrome(str){
    let stack=[];
    let reverse='';
    for(let i of str){
        stack.push(i)
    }
    while(stack.length>0){
        reverse+=stack.pop()
    }
    if(reverse!==str){
        return console.log('it does not palindrome')
    }else{
        return console.log('it is palindrome')
    }
}
isPalidrome('mam')

// text editor using two stack

class textEditor{
constructor(){
    this.undos=[];
    this.redos=[];
    this.text=""
}
type(data){
    this.undos.push(data);
    this.text+=data
}
Undo(){
    if(this.undos.length===0){
        return console.log('there is nothing ');
    }
    this.redos.push(this.undos.pop())
    this.text=this.text.slice(0,-1)
}
Redos(){
    if(this.redos.length===0){
        return console.log('there is nothing ');
    }
    let restore=this.redos.pop()
    this.undos.push(restore)
    this.text+=restore
}
show(){
    console.log(this.text)
}

}
const editor =new textEditor()
editor.type('a');
editor.type('b');
editor.type('c');
editor.show()
editor.Undo()
editor.show()
editor.Redos()
editor.show()


// remove mid element from stack

let stack=[1,2,3,4,5];
function removeMid(stk){
    let res=[]
let mid=Math.floor(stk.length/2);
for(let i =0;i<mid;i++){
    res.push(stk.pop())
}
stk.pop();
while(res.length>0){
    stk.push(res.pop())
}
return stk
}
console.log(removeMid(stack))

// another way
class stack{
    constructor(){
        this.stack=[];
    }
    push(value){
        this.stack.push(value);
    }
    mid(n=this.stack.length,j=0){
     if(n===j)return 
     let temp=this.stack.pop();
     this.mid(n,j+1);
     if(j!==Math.floor(this.stack.length/2)){
        this.stack.push(temp)
     }
    }
    show(){
        console.log(this.stack)
    }

}
let s=new stack();
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.show();
s.mid();
s.show()