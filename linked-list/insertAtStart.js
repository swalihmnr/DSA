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
  shift(data){
    let newNode =new Node(data);
    newNode.next=this.head;
    this.head=newNode
  }
}
let link = new LinkedList()
link.shift(20);
link.shift(12)
console.log(link)