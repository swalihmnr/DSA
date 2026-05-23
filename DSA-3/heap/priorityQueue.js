class Node{
    constructor(value,priority){
        this.value=value;
        this.priority=priority;
    }
}
class PriorityQueue{
    constructor(){
        this.heap=[]
    }
    enqueue(value,priority){
        let newNode=new Node(value,priority);
        this.heap.push(newNode);
        this.heapifyUp()
    }
    dequeue(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop();
        }
        let max=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown()
        return max
    }
    heapifyUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parantIndex=Math.floor((index-1)/2)
            if(this.heap[parantIndex].priority>=this.heap[index].priority){
                break;
            }
            [this.heap[parantIndex],this.heap[index]]=[this.heap[index],this.heap[parantIndex]];
            index=parantIndex
        }
    }
    heapifyDown(){
        let index=0;
        let length=this.heap.length;
        while(true){
            let largest=index
            let left=2*index+1;
            let right=2*index+2;
            if(left<length&&this.heap[left].priority>this.heap[largest].priority){
                largest=left
            }
            if(right<length&&this.heap[right].priority>this.heap[largest].priority){
                largest=right
            }
            if(index===largest){
                break
            }
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]];
            index=largest;
        }
    }
}
const pq = new PriorityQueue();

pq.enqueue("Fever",1);

pq.enqueue("Broken Arm",3);

pq.enqueue("Heart Attack",10);

console.log(pq.heap);

console.log(pq.dequeue());