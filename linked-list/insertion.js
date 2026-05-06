class Node {
    constructor(data){
        this.data=data,
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }

    insert(data){
        let newNode =new Node(data);
        newNode.next=this.head;
        this.head=newNode
    }
    print(){
        let current =this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next
        }
    }
}
const link =new LinkedList();
link.insert(10)
link.insert(34)
link.print()
