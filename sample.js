class Maxheap{
    constructor(){
        this.heap=[];
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp()

    }
    heapifyUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            if(this.heap[index]<=this.heap[parentIndex]){
                break;
            }
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]];
            index=parentIndex
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
        this.heapifyDown()
        return max

    }
    heapifyDown(){
        let index=0;
        let length=this.heap.length
        while(true){
            let largest=index
            let left=2*index+1;
            let right=2*index+2;
            if(left<length&&this.heap[left]>=this.heap[largest]){
                largest=left;
            }
            if(right<length&&this.heap[right]>=this.heap[largest]){
                largest=right
            }
            if(largest===index){
                break
            }
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]];
            index=largest;
        }
    }
    heapSort(arr){
       for(let i of arr){
        this.insert(i);
       }
       let sort=[];
       while(this.heap.length>0){
        sort.push(this.remove())
       }
       return sort
    }
}

const p=new Maxheap();
// p.insert(20)
// p.insert(50)
// p.insert(40)
// p.insert(30)
p.remove()
console.log(p.heapSort([30,45,64,23,56]))
console.log(p.heap)