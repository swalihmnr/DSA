class MinHeap{
    constructor(){
        this.heap=[];
    }
    insert(value){
        this.heap.push(value);

    }
    heapifyUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            if(this.heap[parentIndex]<this.heap[index]){
                break;
            }
            [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]];
            index=parentIndex
        }
    }
    remove(){
        if(this.heap===0){
            return null
        }
        if(this.heap===1){
            return this.heap.pop();
        }
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        
    }
    heapifyDown(){
        let index=0;
        let length=this.heap.length;
        while(true){
            let min=index;
            let left=2*index+1;
            let right=2*index+2;
            if(left<length&&this.heap[left]<this.heap[min]){
                min=left
            }
            if(right<length&&this.heap[right]<this.heap[min]){
                min=right
            }
            if(index===min){
                break
            }
            [this.heap[index],this.heap[min]]=[this.heap[min],this.heap[index]];
            index=min
        }
        
    }

}