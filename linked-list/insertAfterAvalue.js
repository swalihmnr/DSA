class Node {
    constructor(data){
        this.data=data,
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    insert(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next =newNode;
            this.tail=this.tail.next
        }
    }

inserAfter(pos,value){
    let newNode =new Node(value);
    let current =this.head
    while(current!==null){
        if(current.data===pos){
            if(current===this.tail){
                this.tail=newNode
            }
            newNode.next=current.next;
            current.next=newNode
            return 
        }
        current =current.next
    }
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
link.insert(60)
link.insert(24)
link.print()
console.log('after adding new ')
link.inserAfter(24,100)
link.print()
