// // // class Node{
// // //     constructor(value){
// // //         this.value=value;
// // //         this.left=null;
// // //         this.right=null
// // //     }
// // // }
// // // class BST{
// // //     constructor(){
// // //         this.root=null
// // //     }
// // //     insert(value){
// // //         if(this.root===null){
// // //             this.root=new Node(value);
// // //             return 
// // //         }
// // //         let current=this.root;
// // //         let newNode=new Node(value);
// // //         while(true){
// // //             if(value<current.value){
// // //                 if(current.left===null){
// // //                     current.left=newNode;
// // //                     return
// // //                 }
// // //                 current=current.left;
// // //             }else{
// // //                 if(current.right===null){
// // //                     current.right=newNode;
// // //                     return
// // //                 }
// // //                 current=current.right
// // //             }
        
// // //         }
// // //     }
// // //     preOrder(node){
// // //         if(node===null){
// // //             return 
// // //         }
// // //         console.log(node.value);
// // //         this.preOrder(node.left);
// // //         this.preOrder(node.right)
// // //     }
// // //     inOder(node){
// // //         if(node===null){
// // //             return 
// // //         }
// // //         this.inOder(node.left);
// // //         console.log(node.value)
// // //         this.inOder(node.right)
// // //     }
// // //     postOder(node){
// // //         if(node===null){
// // //             return 
// // //         }
// // //         this.postOder(node.left);
// // //         this.postOder(node.right);
// // //         console.log(node.value)
// // //     }
// // //     levelOrder(){
// // //         let queue=[];
// // //         queue.push(this.root);
// // //         while(queue.length>0){
// // //             let current=queue.shift();
// // //             if(current.left){
// // //                 queue.push(current.left);
// // //             }
// // //             console.log(current.value)
// // //             if(current.right){
// // //                 queue.push(current.right);
// // //             }
// // //         }
// // //     }
// // // search(node,target){
// // //     if(node===null){
// // //         return false
// // //     }
// // //     if(node.value===target){
// // //         return true
// // //     }
// // //     if(target<node.value){
// // //        return this.search(node.left,target);
// // //     }else{
// // //        return this.search(node.right,target)
// // //     }
// // // }
// // // min(node){
// // //     let current=node
// // //     while(current.left){
// // //         current=current.left;
// // //     }
// // //     return current.value
// // // }
// // // max(){
// // //     let current=this.root;
// // //     while(current.right){
// // //         current=current.right
// // //     }
// // //     return current.value
// // // }
// // // hight(node){
// // //     if(node===null){
// // //         return 0
// // //     }
// // //     let left=this.hight(node.left);
// // //     let right=this.hight(node.right);
// // //     return 1+Math.max(left,right);
// // // }
// // // findEdge(node){
// // //     if(node===null){
// // //         return -1;
// // //     }
// // //     return 1+Math.max(this.findEdge(node.left),this.findEdge(node.right));

// // // }
// // // findDepth(node,value,level=0){
// // //     if(node===null){
// // //         return 
// // //     }
// // //     if(node.value===value){
// // //         return level
// // //     }
// // //     if(value<node.value){
// // //         return this.findDepth(node.left,value,level+1);
// // //     }else{
// // //         return this.findDepth(node.right,value,level+1)
// // //     }
// // // }
// // // countNode(node){
// // //     if(node===null){
// // //         return 0
// // //     }
// // //     return 1+this.countNode(node.left)+this.countNode(node.right);
// // // }
// // // countLeaf(node){
// // //     if(node===null){
// // //         return 0
// // //     }
// // //     if(node.left===null&&node.right===null){
// // //         return 1
// // //     }
// // //     return this.countLeaf(node.left)+this.countLeaf(node.right)
// // // }
// // // delete(node,value){
// // //     if(node===null){
// // //         return null
// // //     }
// // //     if(value<node.value){
// // //        node.left= this.delete(node.left,value);
// // //     }else if(value>node.value){
// // //        node.right= this.delete(node.right,value);
// // //     }else{
// // //         if(node.left===null&&node.right===null){
// // //             return null
// // //         }
// // //         if(node.left===null){
// // //             return node.right
// // //         }
// // //         if(node.right===null){
// // //             return node.left
// // //         }
// // //         let minValue=this.min(node.right);
// // //         node.vlaue=minValue;
// // //         node.right=this.delete(node.right,minValue)
// // //     }
// // //     return node

// // // }
// // // }

// // class Maxheap{
// //     constructor(){
// //         this.heap=[]
// //     }
// //     insert(value){
// //         this.heap.push(value)
// //         this.heapfyUp()
// //     }
// //     heapfyUp(){
// //         let index=this.heap.length-1;
// //         while(index>0){
// //             let parentIndex=Math.floor((index-1)/2);
// //             if(this.heap[parentIndex]>=this.heap[index]){
// //                 break;
// //             }
// //             [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]];
// //             index=parentIndex

// //         }
// //     }
// //     heapfyDown(){
// //        let index=0;
// //        let length=this.heap.length;
// //        while(true){
// //         let leftChild=2*index+1;
// //         let rightChild=2*index+2;
// //         let largest=index
// //         if(leftChild<length&&this.heap[leftChild]>this.heap[largest]){
// //             largest=leftChild
// //         }
// //         if(rightChild<length&&this.heap[rightChild]>this.heap[largest]){
// //             largest=rightChild
// //         }
// //         if(index===largest){
// //             break;
// //         }
// //         [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
// //         index=largest
// //        }
// //     }
// //     remove(){
// //         if(this.heap.length===0){
// //             return null
// //         }
// //         if(this.heap.length===1){
// //             return this.heap.pop()
// //         }
// //         let max=this.heap[0];
// //         this.heap[0]=this.heap.pop()
// //         this.heapfyDown();
// //        return  max
// //     }
// //     heapSort(arr){
// //         for(let i of arr){
// //             this.insert(i)
// //         }
// //         let sort=[]
// //         while(this.heap.length>0){
// //             sort.push(this.remove())
// //         }
// //         return sort
// //     }
    

// // }

// class TrieNode{
//     constructor(){
//         this.children={};
//         this.endOfWord=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new TrieNode()
//     }
//     insert(word){
//         let node =this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new TrieNode()
//             }
//             node=node.children[char]
//         }
//         node.endOfWord=true
//     }
//     search(word){
//         let node=this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.endOfWord
//     }
//     startWith(prefix){
//         let node=this.root;
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }
//     autoComplete(prefix){
//         let node=this.root ;
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return []
//             }
//             node=node.children[char]
//         }
//         let result=[]
//         this.autoHelper(node,prefix,result)
//         return result
        

//     }
//  autoHelper(node,word,result){
//     if(node.endOfWord){
//         result.push(word)
//     }
//     for(let char in node.children){
//         this.autoHelper(node.children[char],word+char,result)
//     }
//  }
//  delete(word){
//     this.deleteHelper(this.root,word,0)
//  }
//  deleteHelper(node,word,index){
//     if(index===word.length){
//         if(!node.endOfWord){
//             return false
//         }
//         node.endOfWord=false;
//         return Object.keys(node.children).length===0;
//     }
//     let char=word[index];
//     let shouldDelete=this.deleteHelper(node.children[char],word,index+1);
//     if(shouldDelete){
//         delete node.children[char];
//         return Object.keys(node.children).length===0&&!node.endOfWord
//     }
//     return false

//  }
// }
class Graph{
    constructor(){
        this.adjecencyList={};
    }
    addVertex(vetext){
        if()
    }
}