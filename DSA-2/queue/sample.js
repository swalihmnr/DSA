class stack{
    constructor(){
        this.queue=[];
        this.queue1=[];
    }
    enqueue(data){
        this.queue.push(data);
    }
    pop(){
        if(this.queue.length===0&&this.queue.length===0){
            console.log('it is underflow');
        }
        while(this.queue.length>0){
            this.queue1.push(this.queue.shift())
        }
        return this.queue1.pop();
    }
    


}