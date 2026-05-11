class queue{
    constructor(){
        this.queue=[];
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        if(this.queue.length===0){
            console.log('this is the underfllow');
        }
        this.queue.shift()
         return this.queue 
    }
    frond(){
        if(this.queue.length===0){
            console.log('it is underflow');
        }
        return this.queue[0];
    }
    isEmpty(){
        if(this.queue.length===0){
            console.log('it is empty');
            return 
        }else{
        return      console.log('it does not empty')
        
        }
    }
}

const s=new queue();
s.enqueue(10)
s.enqueue(34);
s.enqueue(45)
s.enqueue(56);
console.log(s.dequeue());




// queue implemntation using two stacks

class queue{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }
    push(data){
        this.stack1.push(data);
    }
    dequeue(){
        if(this.stack1.length===0&&this.stack2.length===0){
            return console.log('queue is underflow');
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek(){
        if(this.stack1.length===0&&this.stack2.length===0){
            return console.log('queue is underflow');
        }
        return this.stack2[0]
    }
    isEmpty(){
        if(this.stack1.length===0&&this.stack2.length===0){
            return console.log('queue is underflow');
        }else{
            console.log('this queue is not empty..')
        }
    }
}