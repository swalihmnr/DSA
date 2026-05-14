class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null
    }
    insert(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=this.tail.next
        }
    }
    print(){
        let current =this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    reverse(){
        let current =this.head;
        let prev=null;
        this.tail=this.head
        while(current){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }

}
const link=new LinkedList();
link.insert(10)
link.insert(20)
link.insert(30)
link.insert(40)
link.reverse()
link.print()