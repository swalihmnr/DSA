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
    print(){
        let current =this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next
        }
    }

    // findMid(){
    //    let current =this.head;;
    //    let count=0;
    //    while(current){
    //     count++
    //     current=current.next
    //    }
    //    let mid=Math.floor(count/2);
    //    current=this.head
    //    for(let i = 0 ; i<mid ; i++){
    //     current=current.next
    //    }
    //    console.log('middle of this :',current.data)

    // }


    findMid(){
      let slow =this.head;
      let fast =this.head;
      while(fast!==null&&fast.next!==null){
        slow =slow.next;
        fast =fast.next.next;
      }
      while(slow.next!==null){
        console.log(slow.data)
        slow=slow.next
      }
    }
}
const link =new LinkedList();
link.insert(10);
link.insert(23);
link.insert(45);
link.insert(45);
link.insert(445);
link.insert(425);
link.insert(4335);
link.insert(4335);
link.findMid()