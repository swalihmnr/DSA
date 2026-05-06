class DNode{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null
    }
}
class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insert(data){
        let newNode=new DNode(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=this.tail.next;
        }
    }
    print(){
        let current=this.tail;
        while(current){
            console.log(current.data);
            current=current.prev;
        }
    }
}

const link=new doublyLinkedList();
link.insert(10)
link.insert(40)
link.insert(50)
link.insert(60)
link.print()