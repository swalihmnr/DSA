class Maxheap{
    constructor(){
        this.heap=[];
    }
    insert(value){
        this.heap.push(value);
        this.heapFyUp()
    }
    heapFyUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parantIndex=Math.floor((index-1)/2);
            if(this.heap[parantIndex]>=this.heap[index]){
                break;
            }
            [this.heap[parantIndex],this.heap[index]]=[this.heap[index],this.heap[parantIndex]];
            index=parantIndex;
        }
    }
}
const heap=new Maxheap();
heap.insert(73)
heap.insert(30)
heap.insert(70)
heap.insert(60)
heap.insert(50)
heap.insert(100)
console.log(heap.heap)

// remove
class Maxheap{
    constructor(){
        this.heap=[];
    }
    insert(value){
        this.heap.push(value);
        this.heapFyUp()
    }
    heapFyUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parantIndex=Math.floor((index-1)/2);
            if(this.heap[parantIndex]>=this.heap[index]){
                break;
            }
            [this.heap[parantIndex],this.heap[index]]=[this.heap[index],this.heap[parantIndex]];
            index=parantIndex;
        }
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let max=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapFyDown();
        return max
    }
    heapFyDown(){
        let index=0;
        let length=this.heap.length;
        let largest=index;
        while(true){
            let leftChild=2*index+1;
            let rightChild=2*index+2;
            if(leftChild<length&&this.heap[leftChild]>this.heap[largest]){
                largest=leftChild;
            }
            if(rightChild<length&&this.heap[rightChild]>this.heap[largest]){
                largest=rightChild
            }
            if(index===largest){
                break;
            }
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]];
            index=largest
        }
        
    }
}

