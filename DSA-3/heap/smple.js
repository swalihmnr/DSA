class MaxHeap{
    constructor(){
        this.heap=[];
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            if(this.heap[index]<=this.heap[parentIndex]){
                break;
            }
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]];
            index=parentIndex
        }
    }
    removeMax(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop();
        }
        let max=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return max
    }
    heapifyDown(ind){
        let index=ind
        let length=this.heap.length
        while(true){
            let leftChild=2*index+1;
            let rightChild=2*index+2;
            let largest=index
            if(leftChild<length&&this.heap[leftChild]>this.heap[largest]){
                largest=leftChild;
            }
            if(rightChild<length&&this.heap[rightChild]>this.heap[largest]){
                largest=rightChild
            }
            if(largest===index){
                break
            }
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]];
            index=largest;
        }
        
    }
    getRightChild(heap,index){
        let rightChild=2*index+2;
        if(rightChild>=heap.length){
            return null
        }
        return heap[rightChild]
    }
    heapSort(arr){
        for(let i of arr){
            this.insert(i);
        }
        let sorted=[];
        while(this.heap.length>0){
            sorted.push(this.removeMax())
        }
        return sorted;
    }
    findKnthLargest(k){
        let temp=this.heap;
        let arr=[];
        while(this.heap.length>0){
            arr.push(this.removeMax())
        }
        this.heap=temp
        return arr[k-1]
    }
    findKnthSmallest(k){
        if(k<1||k>this.heap.length) return null
      let temp=[...this.heap];
      let arr=[];
      while(this.heap.length>0){
        arr.push(this.removeMax());
      }
      this.heap=temp;
      return arr[arr.length-k];
    }
    // delete(value){
    //     let index=this.heap.indexOf(value);
    //     if(index===-1){
    //         return console.log('it is not valid')
    //     }
    //     if(index===this.heap.length-1){
    //         this.heap.pop()
    //         return this.heap
    //     }
    //     this.heap[index]=this.heap.pop();
    //     let parentIndex=Math.floor((index-1)/2);

    //     if(index>0&&this.heap[index]>this.heap[parentIndex]){
    //         this.heapifyUp(index)
    //     }else{
    //         this.heapifyDown(index)
    //     }
    //     return this.heap
    // }

}
class MinHeap{
    constructor(){
        this.heap=[];
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            if(this.heap[index]>=this.heap[parentIndex]){
                break;
            }
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]];
            index=parentIndex;
        }
        
    }
    heapifyDown(){
        let index=0;
        let length=this.heap.length
        while(true){
            let smallest=index;
            let leftChild=2*index+1;
            let rightChild=2*index+2;
            if(length>leftChild&&this.heap[leftChild]<this.heap[smallest]){
                smallest=leftChild;
            }
            if(length>rightChild&&this.heap[rightChild]<this.heap[smallest]){
                smallest=rightChild;
            }
            if(index===smallest){
                break;
            }
            [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]];
            index=smallest
        }
    }
    removeMin(){
        if(this.heap.length===0)return null
        if(this.heap.length===1)return this.heap.pop();
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return min;
    }
    findKndthSmallest(k){
        let heap=new MaxHeap();
        for(let i of this.heap){
            heap.insert(i);
        }
        let arr=[];
        while(heap.heap.length>0){
            arr.push(heap.removeMax())
        }
        return arr[arr.length-k]
    }
    findKndthLargest(k){
        let heap=new MinHeap();
        for(let i of this.heap){
            heap.insert(i)
        }
        let arr=[];
        while(heap.heap.length>0){
            arr.push(this.removeMin())
        }
        return arr[k-1]
    }
}







let Mheap=new MinHeap();
Mheap.insert(10)
Mheap.insert(20)
Mheap.insert(30)
Mheap.insert(40)
Mheap.insert(50)
console.log(Mheap.heap)
console.log(Mheap.findKndthSmallest(1))
console.log(Mheap.findKndthLargest(2))
// Mheap.removeMax()
// console.log(Mheap.heap)
// console.log(Mheap.heapSort([1,2,3,4,5,6]))
// console.log(Mheap.findKnthLargest(3))
// console.log(Mheap.findKnthSmallest(1))
// Mheap.delete(10) 