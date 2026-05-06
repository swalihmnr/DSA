class Node {
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null,
        this.tail=null
    }
    push(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
          this.tail.next=newNode;
          this.tail=this.tail.next
            
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
link.push(10)
link.push(30)
link.push(45)
link.push(50)
link.print()








