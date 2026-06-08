// tree implementaion
// ............

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// const root= new Node(10);
// let node1= new Node(20);
// let node2=new Node(30);
// root.left=node1;
// root.right=node2
// console.log(root)

//     //    10
//     //   /  \
//     //  5   15

class Node{
    constructor(value){
        this.value=value;
        this.left=null ;
        this.right=null;
    }
}
class Tree{
    constructor(){
        this.root=null;
    }
    insert(value){
        if(this.root===null){
            this.root=new Node(value);
            return ;
        }
        let newNode=new Node(value);
        let current=this.root;
        while(current){
            if(value%2===0){
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
    inOrder(node){
        if(node===null){
            return 
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right)
    }
}
const h=new Tree();
h.insert(1)
h.insert(3)
h.insert(2)
h.insert(6)
h.insert(5)
h.inOrder(h.root)


