class queue{
    constructor(){
        this.queue=[];
    }
    enqueue(data){
        this.queue.push(data)

    }
    mid(n=this.queue.length,j=0){
        if(n===j)return
       
        let temp=this.queue.shift();
        this.mid(n,j+1);
        if(j!==Math.floor(n/2)){
            this.queue.push(temp)
        }
    }
    desplay(){
        console.log(this.queue)
    }
}
const q=new queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.desplay()
q.mid();
q.desplay()