class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        if(this.root===null){
            this.root=new Node(value);
            return 
        }
        let newNode=new Node(value);
        let current=this.root;
        while(current){
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return 
                }
                current=current.left;
            }else{
                if(current.right===null){
                    current.right=newNode;
                    return 
                }
                current=current.right;
            }
        }
    }
    preOrder(node){
        if(node===null){
            return
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    inOrder(node){
        if(node===null){
            return 
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
    postOrder(node){
        if(node===null){
            return 
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }
    levelOrder(){
        let queue=[];
        queue.push(this.root);
        while(queue.length>0){
            let current=queue.shift();
            console.log(current.value)
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }
    search(value){
        let current =this.root;
        while(current){
            if(value===current.value){
                return true;
            }
            if(value<current.value){
                current=current.left;
            }else{
                current=current.right
            }
        }
        return false
    }
    min(){

        let current=this.root;
        while(current.left){
            current=current.left;
        }
        return current.value
    }
    max(){
        let current=this.root;
        while(current.right){
            current=current.right;
        }
        return current.value
    }
    hieght(node){
        if(node===null){
            return 0
        }
        let leftChild=this.hieght(node.left);
        let rightChild=this.hieght(node.right);
        return 1+ Math.max(leftChild,rightChild);
    }
    edge(node){
        if(node===null){
            return -1;
        }
        let leftChild=this.edge(node.left);
        let rightChild=this.edge(node.right);
        return 1 + Math.max(leftChild,rightChild);
    }
    findDepth(node,value,level=0){
        if(node===null){
            return null
        }
        if(node.value===value){
            return level
        }
        if(value<node.value){
            return this.findDepth(node.left,value,level+1);
        }else{
            return this.findDepth(node.right,value,level+1)
        }
    }
    countNode(node){
        if(node===null){
            return 0
        }
        let leftChild=this.countNode(node.left);
        let rightChild=this.countNode(node.right);
        return 1+ leftChild+rightChild;

    }
    countLeaf(node){
        if(node===null){
            return 0
        }
        if(node.left===null&&node.right===null){
            return 1
        }
        return this.countLeaf(node.left)+this.countLeaf(node.right);
    }
   delete(node,value){
    if(node===null){
        return null;
    }
    if(value<node.value){
        node.left=this.delete(node.left,value);
    }else if(value>node.value){
        node.right=this.delete(node.right,value);
    }else{
        if(node.left===null&&node.right===null){
            return null
        }
        if(node.left===null){
            return node.right
        }
        if(node.right===null){
            return node.left
        }
        let minValue=this.min();
        node.value=minValue;
        node.right=this.delete(node.right,minValue)
    }
   }
   findClosestValue(target){
    let current=this.root;
    let closest=current.value
    while(current!==null){
        if(Math.abs(target-current.value)<Mth.abs(target-closest)){
            closest=current.value
        }
        if(value<current.value){
            current=current.left;
        }else if(value>current.value){
            current=current.right
        }else{
            return closest
        }

    }
   }
   findKnthLargest(k){
    let arr=[];
    function inOrder(node){
        if(node===null)return 
        inOrder(node.left);
        arr.push(node.value);
        inOrder(node.right);
    }
    inOrder(this.root)
    return arr[k-1];
   }
   findKnthSmallest(k){
    let arr=[];
    function inOrder(node){
        if(node===null)return 
        inOrder(node.left);
        arr.push(node.value);
        inOrder(node.right);
    }
    inOrder(this.root);
    return arr[arr.length-k-1]
   }
   isBST(){
    let arr=[];
    function inOrder(node){
        if(!node) return 
        inOrder(node.left);
        arr.push(node.value);
        inOrder(node.right);
    }
    inOrder(this.root);
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1])return false
    }
    return true
   }
}
let bst=new BST();
bst.insert(10);
bst.insert(20);
bst.insert(40);
bst.insert(50);
// bst.levelOrder()
// console.log(bst.search(44))
// console.log(bst.min())
// console.log(bst.max())
// console.log(bst.hieght(bst.root))
// console.log(bst.edge(bst.root))
// console.log(bst.findDepth(bst.root,20))
// console.log(bst.countNode(bst.root));
// console.log(bst.countLeaf(bst.root))
// console.log(bst.delete(bst.root,20))
// bst.levelOrder()
console.log(bst.findKnthLargest(4))
console.log(bst.findKnthSmallest(3))
console.log(bst.isBST())