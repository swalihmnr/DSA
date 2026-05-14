class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insert(data){
        let newNode =new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=this.tail.next
        }

    }
  insertBefore(pos,value){
    let newNode=new Node(value);
    let prev=null;
    let current =this.head;
    while(current!==null){

        if(current.data===pos){
            if(prev===null){
                newNode.next=this.head;
                this.head=newNode
            }else{
                prev.next=newNode;
                newNode.next=current;
            }
       
            return 
    
        }
        prev=current
        current=current.next
    }
  }

    print(){
        let current =this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }
}
const link =new LinkedList();
link.insert(10);
link.insert(23);
link.print()
console.log('after')
link.insertBefore(10,425)
link.print()