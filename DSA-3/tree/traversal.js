// preorder ,inorder

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{
    constructor(){
        this.root=null;
    }
    addRoot(value){
        if(this.root===null){
            this.root=new Node(value)
        }
    }
    preOrder(node){
        if(node===null){
            return 
        }
        console.log(node.value)
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    inOrder(node){
        if(node===null){
            return 
        }
        this.inOrder(node.left)
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
            console.log(current.value)
            if(current.right){
                queue.push(current.right)
            }
        }
        
    }
}


const tree=new BinaryTree();
tree.addRoot(100);
tree.root.left=new Node(50);
tree.root.right=new Node(200);
tree.root.right.right=new Node(300);
tree.root.left.right=new Node(75)
tree.root.left.left=new Node(25)
// tree.preOrder(tree.root)
tree.inOrder(tree.root)

