// // // // // class Stack{
// // // // //     constructor(){
// // // // //         this.items=[];
// // // // //     }
// // // // //     push(value){
// // // // //         this.items.push(value);
// // // // //     }
// // // // //     pop(){
// // // // //         if(this.items.length===0){
// // // // //             return console.log('stack is underflow');
// // // // //         }
// // // // //         return this.items.pop()
    
// // // // //     }
// // // // //     peek(){
// // // // //         if(this.items.length===0){
// // // // //             return console.log('stack is underflow');
// // // // //         }
// // // // //         let rem=this.items[this.items.length-1];
// // // // //         return rem
// // // // //     }
// // // // //     isEmpty(){
// // // // //         if(this.items.length===0){
// // // // //             return true
// // // // //         }else{
// // // // //          return false
// // // // //         }
// // // // //     }
// // // // //     size(){
// // // // //         if(this.items.length===0){
// // // // //             return console.log('stack is underflow');
// // // // //         }else{
// // // // //             return this.items.length
// // // // //         }
// // // // //     }
// // // // //     display(){
// // // // //         if(this.items.length===0){
// // // // //             return console.log('stack is underflow');
// // // // //         }
// // // // //         return console.log(this.items)
// // // // //     }
// // // // // }
// // // // // const s=new Stack();
// // // // // // s.push(10)
// // // // // // s.push(20)
// // // // // // s.push(30)
// // // // // s.display()
// // // // // s.isEmpty()
// // // // // s.display()
// // // // class Node{
// // // //     constructor(data){
// // // //         this.data=data;
// // // //         this.next=null;
// // // //     }
// // // // }
// // // // class Stack{
// // // //     constructor(){
// // // //         this.head=null;
// // // //         this.tail=null;
// // // //     }
// // // //     push(data){
// // // //         let newNode=new Node(data);
// // // //         if(this.head===null){
// // // //             this.head=newNode;
// // // //             this.tail=newNode;
// // // //         }else{
// // // //             this.tail.next=newNode;
// // // //             this.tail=newNode;
// // // //         }
// // // //     }
// // // //    pop(){
// // // //     if(this.head===null){
// // // //         return `stack is underflow`
// // // //     }
// // // //     if(this.head.data===this.tail.data){
// // // //         let removed=this.head.data;
// // // //         this.head=null;
// // // //         this.tail=null
// // // //         return removed
// // // //     }
// // // //     let current=this.head;
// // // //     let prev=null;
// // // //     while(current.next!==null){
// // // //       prev=current;
// // // //       current=current.next
// // // //     }
// // // //     let removed=current.data;
// // // //     prev.next=current.next;
// // // //     this.tail=prev;
// // // //     return removed
// // // //    }
// // // // }

// // // // let str="swalih";
// // // // let Stack=str.split('');
// // // // let result="";
// // // // while(Stack.length>0){
// // // //     result+=Stack.pop()
// // // // }
// // // // console.log(result)

// // // // let str="{()}";
// // // // function checker(str){
// // // //     let map={
// // // //         ')':'(',
// // // //         '}':'{',
// // // //         ']':'['
// // // //     }
// // // //     let stack=[];
// // // //     for(let i of str){
// // // //         if(i=='('||i==='['||i==='{'){
// // // //             stack.push(i);
// // // //         }else{
// // // //             if(stack.length===0||stack.pop()!==map[i]){
// // // //               return false
// // // //             }
// // // //         }
// // // //     }
// // // //     return stack.length===0
// // // // }

// // // // let str="swalih";
// // // // function reverse(str,i=str.length-1){
// // // //     if(i<0){
// // // //         return ""
// // // //     }
// // // //     return str[i]+reverse(str,i-1)

// // // // }
// // // // console.log(reverse(str))

// // // class Stack{
// // //     constructor(){
// // //         this.stack=[]
// // //         this.stack1=[]
// // //     }
// // //     isEmpty(){
// // //         if(this.stack.length===0){
// // //             return false
// // //         }else{
// // //             return true
// // //         }
// // //     }
// // //  reverseString(str){
// // //     let stack=new Stack();
// // //     for(let i of str){
// // //         stack.push(i)
// // //     }
// // //     function reverse(){
// // //         if(stack.isEmpty()){
// // //             return ""
// // //         }
// // //         return stack.pop()+reverse()
// // //     }
// // //     return reverse()
// // //  }
// // //  stackSort(){
// // //     while(this.stack.length>0){
// // //         let temp=this.stack.pop()
// // //       while(this.stack.length>0&&this.stack1[this.stack1.length-1]>temp){
// // //         this.stack.push(this.stack1.pop());
// // //       }
// // //       this.stack1.push(temp)
// // //     }
// // //     return this.stack1
// // //  }

// // // }
// // // class stack{
// // //     constructor(){
// // //         this.stack=[];
// // //         this.stack1=[]
// // //     }
// // //     push(value){
// // //         if(this.stack.length===0){
// // //             this.stack.push(value);
// // //             this.stack1.push(value)
// // //         }
// // //         if(this.stack1[this.stack1.length-1]>=value){
// // //            this.stack1.push(value)
// // //         }
// // //     }
// // // }
// // // class browser{
// // //     constructor(home){
// // //         this.current=home;
// // //         this.backStack=[];
// // //         this.forwardStack=[];
// // //     }
// // //     vist(url){
// // //         this.backStack.push(this.current);
// // //         this.current=url;
// // //         this.forwardStack=[];
// // //     }
// // //     back(){
// // //         if(this.backStack.length===0){
// // //             return 'no hsitory'
// // //         }
// // //         this.forwardStack.push(this.current);
// // //         this.current=this.backStack.pop();
// // //         return this.current
// // //     }
// // //     forward(){
// // //         if(this.forwardStack.length===0){
// // //             return `no forward history`
// // //         }
// // //         this.current=this.forwardStack.pop()
// // //         return this.current
// // //     }
// // // }

// // // class texEditor{
// // //     constructor(){
// // //         this.text=""
// // //         this.undos=[];
// // //         this.redos=[]
// // //     }
// // //    type (txt){
// // //     this.undos.push(this.text);
// // //     this.text=txt;
// // //     this.redos=[];
// // //    }
// // //    udno(){
// // //     if(this.undos.length===0){
// // //         return 'there is nothing to undo';
// // //     }
// // //     this.redos.push(this.text);
// // //     this.text=this.undos.pop()
// // //     return this.text
// // //    }
// // //    redo(){
// // //     if(this.redos.length===0){
// // //         return `there is nothing to redo`;
// // //     }
    
// // //     this.undos.push(this.text);
// // //     this.text=this.redos.pop()
// // //     return this.text
// // //    }

// // // }

// // // class Queue{
// // //     constructor(){
// // //         this.queue=[];
// // //     }
// // //     enqueue(value){
// // //         this.queue.push(value)
// // //     }
// // //     dequeue(){
// // //         if(this.queue.length===0){
// // //             return`queue is underflow`
// // //         }
// // //         let rem=this.queue.shift();
// // //         return rem;
// // //     }
// // //     peek(){
// // //         return this.queue[this.queue.length-1];
// // //     }
// // // }
// // // class Stack{
// // // constructor(){
// // //     this.queue1=[];
// // //     this.queue2=[];
// // // }
// // // push(x){
// // //     this.queue2.push(x);
// // //     while(this.queue1.length>0){
// // //         this.queue2.push(this.queue1.shift())
// // //     }
// // //     let temp=this.queue1;
// // //     this.queue1=this.queue2;
// // //     this.queue2=temp
// // // }
// // // pop(){
// // //   if(this.queue1.length===0){
// // //     return 'there is nothing '
// // //   }
// // //   let rem=this.queue1.shift()
// // //   return rem
// // // }
// // // }
// // // let c=new Stack();
// // // c.push(10)
// // // c.push(20)
// // // c.push(30)
// // // console.log(c.pop())

// // // class Queue{
// // //     constructor(){
// // //         this.stack1=[];
// // //         this.stack2=[];
// // //     }
// // //     enqueue(x){
// // //         this.stack1.push(x)
// // //     }
// // //     dequeue(){
// // //         if(this.stack1.length===0&&this.stack2.length===0){
// // //             return 'this is underflow'
// // //         }
// // //         while(this.stack1.length>0){
// // //             this.stack2.push(this.stack1.pop);
// // //         }
// // //         return rem =this.stack2.pop()
// // //     }
// // // }

// // class hashTable{
// //     constructor(size){
// //         this.table=new Array(size);
// //         this.size=size;
// //     }
// //     hash(key){
// //         let str=key.toString();
// //         let count=0;
// //         for(let char of str){
// //             count+=char.charCodeAt(0);
// //         }
// //         let index=count%this.size
// //         return index
// //     }
// // //  set(key,value){
// // //     let index=this.hash(key);
// // //     if(!this.table[index]){
// // //         this.table[index]=[];
// // //     }
// // //     this.table[index].push([key,value])
// // //  }
// // //  get(key){
// // //     let index=this.hash(key);
// // //     let bucket=this.table[index];
// // //     if(bucket){
// // //         for(let [k,v] of bucket){
// // //             if(k===key){
// // //                 return v
// // //             }
// // //         }
// // //     }
// // //     return undefined
// // //  }
// // // set(key,value){  
// // //     let i=1; 
// // //     let indx=this.hash(key);
// // //     while(this.table[indx]!==undefined){
// // //         if(this.table[indx][0]===key){
// // //             this.table[indx][1]=value
// // //             return 
// // //         }
// // //         indx=(indx+i*i)%this.size
// // //         i++
// // //     } 
// // //     this.table[indx]=[key,value]
// // // }
// // // get(key){
// // //     let index=this.hash(key);
// // //     let i=1;
// // //     let original=index
// // //     while(this.table[index]!==undefined){
// // //         if(this.table[index][0]===key){
// // //             return this.table[index][1]
// // //         }
// // //         index=(original+i*i)%this.size
// // //         i++
// // //     }
// // //     return undefined
    
// // // }
// // hash1(key){
// //     let count=0;
// //     str=key.toString();
// //     for(let char of key){
// //         count+=char.charCodeAt(0);
// //     }
// //     let prime=3;
// //     return prime-(prime%count)
// // }
// // // set(key,value){
// // //     let index=this.hash(key);
// // //     let steps=this.hash1(key);
// // //     let i=1;
// // //     if(this.table[index]!==undefined){
// // //         if(this.table[index][0]===key){
// // //             this.table[index][1]=value
// // //             return 
// // //         }
// // //         index=(index+i*steps)%this.size
// // //         i++
// // //     }
// // //     this.table[index]=[key,value]
// // // }
// // // get(key){
// // //     let index=this.hash(key);
// // //     let steps=this.hash1(key);
// // //     let i =1;
// // //     while(this.table[index]!==undefined){
// // //        if(this.table[index][0]===key){
// // //         return this.table[index][1]
// // //        }
// // //        index=(index+i*steps)%this.size
// // //        i++
// // //     }
// // // }
// // }

// // class Queue{
// //     constructor(){
// //         this.stack1=[];
// //         this.stack2=[]
// //     }
// //     enqueue(x){
// //         this.stack2.push(x)
// //         while(this.stack1.length>0){
// //             this.stack2.push(this.stack1.pop())
// //         }
// //         let temp=this.stack1;
// //         this.stack1=this.stack2;
// //         this.stack2=temp

// //     }
// //     dequeue(){
// //         if(this.stack1.length===0){
// //             return `stack is underflow`;
// //         }
// //         let rem=this.stack1.pop();
// //         return rem
// //     }
// // }
// class Stack{
//     constructor(){
//         this.queue1=[];
//         this.queue2=[];
//     }
// }