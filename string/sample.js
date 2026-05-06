
let arr=[1,2,3,4,5,6]
class Node {
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
    arrayInsert(ar){
         for(let i =0;i<ar.length;i++){
            let newNode=new Node(ar[i]);
            if(this.head===null){
                this.head=newNode;
                this.tail=newNode;
            }else{
                this.tail.next=newNode;
                this.tail=this.tail.next;
            }
         }
    }
    print(){
        let current =this.head;
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
    insertSp(pos,value){
        let current=this.head;
        while(current){
            if(pos===current.data){
                let newNode=new Node(value);
                newNode.next=current.next;
                current.next=newNode;

                break;
            }
            current=current.next
        }
    }
    insertBefore(pos,value){
        let current=this.head;
        let prev=null

        if(this.head&&this.head.data===pos){
            let newNode=new Node(value);
            newNode.next=this.head;
            this.head=newNode
            return 
        }
        while(current){
            if(current.data===pos){
                let newNode=new Node(value);
                prev.next=newNode;
                newNode.next=current
            }
            prev=current;
            current=current.next;
        }
    }
    delete(value){
        let current=this.head;
        let prev=null
        while(current){
            if(current.data===value){
                prev.next=current.next
            }
            prev=current;
            current=current.next
        }
    }
    shift(value){
         let newNode=new Node(value);
         newNode.next=this.head;
         this.head=newNode;
    }
    findDup(value){
        let current=this.head
        let find=false;
        while(current){
            if(current.data===value){
                console.log(value,'it is the duplicate')
                find=true;
                break
            }
            current=current.next
        }
        if(!find){
            console.log('no vlaue inside of this')
        }

    }
    findMid(){
        let slow =this.head;
        let fast =this.head;
        
        while(fast!==null&&fast.next!==null){
            slow=slow.next;
            fast=fast.next.next
        }
        console.log(`mid is ${slow.data}`)
    }
     
    }
let link=new LinkedList();
link.arrayInsert(arr)
link.insertSp(6,45)
link.insertBefore(6,40)
link.delete(4)
link.shift(20)
link.shift(10)
link.findDup(10)
link.findMid()

link.print()
