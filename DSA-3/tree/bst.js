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
            this.root=new Node(value)
            return 
        }
        let newNode=new Node(value);
        let current=this.root
        while(true){
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
                current=current.right
            }

        }
    }
    preorder(node){
        if(node===null){
            return 
        }
        console.log(node.value)
        this.preorder(node.left);
        this.preorder(node.right)
    }
    inOrder(node){
        if(node===null){
            return 
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right)
    }
    postOrder(node){
        if(node===null){
            return 
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value)
    }
    levelOrder(){
        let queue=[];
        queue.push(this.root);
        while(queue.length>0){
            let current=queue.shift();
            if(current.left){
                queue.push(current.left)
            }
        console.log(current.value);
        if(current.right){
            queue.push(current.right)
        }
        }
    }
    search(value){
        let current=this.root;
        while(current){
            if(current.value===value){
                return true
            }
            if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
    }
    min(){
        let current=this.root;
        while(current){
            current=current.left;
        }
        return current.value
    }
    max(){
        let current=this.root;
        while(current){
            current=current.right;
        }
        return current.value
    }
    hight(node){
        if(node===null){
            return 0
        }
        return 1+Math.max(this.hight(node.left),this.hight(node.right))
    }
    edgeFinding(node){
        if(node===null){
            return -1;
        }
        return 1+Math.max(this.edgeFinding(node.left),this.edgeFinding(node.right))
    }
  findDepth(node,value,level=0){
    if(node===null){
        return -1
    }
    if(node.value===value){
        return level
    }
    if(value<node.value){
        return this.findDepth(node.left,value,level+1)
    }else{
        return this.findDepth(node.right,value,level+1)
    }
  }
countNode(node){
    if(node===null){
        return 0
    }
    let left=this.countNode(node.left)
    let right=this.countNode(node.right)
    return 1+left +right
}
countLeaf(node){
    if(node===null){
        return 0
    }
    if(node.left===null&&node.right===null){
        return 1
    }
    return this.countLeaf(node.left)+this.countLeaf(node.right)
}
   delete(node,value){
    if(node===null){
        return null
    }
    if(value<node.value){
       node.left= this.delete(node.left,value)
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
        let minValue=this.min(node.right);
        node.value=minValue;
        node.right=this.delete(node.right,minValue)

    }
    return node
   }


}
const tree =new BST();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.levelOrder()