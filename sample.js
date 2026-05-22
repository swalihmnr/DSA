class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        if(this.root===null){
            this.root=new Node(value);
            return 
        }
        let current =this.root
        let newNode=new Node(value)
        while(true){
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return
                }
                current=current.left
            }else{
                if(current.right===null){
                    current.right=newNode;
                    return
                }
                current=current.right
            }
        }
    }
    levelOrder(){
        let queue=[];
        queue.push(this.root);
     
        while(queue.length>0){
           let current=queue.shift();
            if(current.left){
                queue.push(current.left)
            }
            console.log(current.value)
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    min(node){
        let current=node
        while(current.left){
            current=current.left;
        }
        return current.value
    }
    max(){
        let current=this.root;
        while(current.right){
            current=current.right
        }
        return current.value
    }
    hieght(node){
        if(node===null){
            return 0
        }
    return 1+Math.max(this.hieght(node.left),this.hieght(node.right))
    }
    countEdge(node){
        if(node===null){
            return -1
        }
        return 1+Math.max(this.countEdge(node.left),this.countEdge(node.right));
    }
    countNode(node){
        if(node===null){
            return 0
        }
        return 1+this.countNode(node.left)+this.countNode(node.right);
    }
    findDepth(node,value,level=0){
        if(node===null){
            return -1
        }
        if(value===node.value){
            return level
        }
        if(value<node.value){
           return this.findDepth(node.left,value,level+1);
        }else{
            return node=this.findDepth(node.right,value,level+1)
        }
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
   deletion(node,value){
    if(node===null){
        return null
    }
    if(value<node.value){
        return node.left=this.deletion(node.left,value)
    }else if (value>node.value){
        return node.right=this.deletion(node.right,value);
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
        let minValue=this.min(this.right);
        node.vlaue=minValue;
        node.right=this.deletion(node.right,vlaue)
    }
   }
}