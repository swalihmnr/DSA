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
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=this.tail.next;
        }
    }

    delete(value){
        let current =this.head;
        let prev=null
        while(current!==null){
            if(current.data===value){
                console.log('fouwnd the value')
                if(prev===null){
                    this.head=current.next
                    if(this.head===null){
                        this.tail=null
                    }
                }else{
                    prev.next=current.next
                    if(prev.next===null){
                        this.tail=prev
                    }
                }
                return 

            }else{
                prev=current;
                current=current.next;
            }
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
link.insert(10);
link.insert(23);
link.insert(45);
link.print();
link.delete(10);
link.print()