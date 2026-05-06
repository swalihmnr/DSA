class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    shift(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    push(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=this.tail.next
        }
    }
    findMid(){
        let slow=this.head;
        let fast=this.head;
        while(fast&&fast.next){
            slow=slow.next;
            fast=fast.next.next
        }
        console.log(slow.data)
    }
    removeEntire(){
        let freq={};
        let current=this.head;
        while(current){
            freq[current.data]=(freq[current.data]||0)+1;
            current=current.next
        }
        current=this.head;
        let dummy=new Node(0)
        let prev=dummy
        dummy.next=this.head
        while(current){
            if(freq[current.data]>1){
                prev.next=current.next
            }else{
                prev=current;
            }
            current=current.next;
            
        }
        this.head=dummy.next
    }
    remDup(){
        let seen =new Set();
        let prev=null
        let current=this.head;
        while(current){
            if(seen.has(current.data)){
                prev.next=current.next;
            }else{
                seen.add(current.data)
                prev=current;
            }
            current=current.next
        }
    }
    remSP(data){
        let current=this.head;
        let freq={}
        while(current){
            freq[current.data]=(freq[current.data]||0)+1;
            current=current.next
        }
        current=this.head;
        let prev=null
        while(current){
            if(current.data===data){
                if(freq[current.data]>1){
                    prev.next=current.next
                }else{
                    prev=current;
                }
                current=current.next
            }
        }
    }
    reverse(){
        let current=this.head;
        let prev=null
        while(current){
            let next=current.next;
            current.next=prev;
            prev=current
            current=next
        }
        this.head=prev;
    }
    posReverse(left,right){
        let dummy =new Node(0);
        let prev=null;
        prev=dummy;
        dummy.next=this.head
        let leftStart=dummy;
        for(let i =0;i<left-1;i++){
            leftStart=leftStart.next
        }

        let current=leftStart.next;
        for(let i =0;i<right-left;i++){
            let next=current.next;
            current.next=next.next;
            next.next=leftStart.next;
            leftStart.next=next
        }
    
    }
    pushBefore(value,pos){
        let newNode=new Node(value);
        let current=this.head;
     if(this.head.data===pos){
        newNode.next=this.head;
        this.head=newNode
        return 
     }
     current=this.head;
     let prev=null
     while(current){
        if(current.data===pos){
            newNode.next=current;
            prev.next=newNode
            return
        }

            prev=current;
        current=current.next

     }
    }
    pushAfter(pos,value){
        let newNode=new Node(value)
        let prev=null
        let current=this.head;
        while(current){
            if(current.data===pos){
               newNode.next=current.next;
               current.next=newNode
               return

            }
            prev=current;
            current=current.next
        }
    }
    removeNthFromEnd(n){
        let current=this.head;
        let length=0;
        while(current){
            length++;
            current=current.next;
        }
        if(length===n){
            return this.head=this.head.next
        }
        current=this.head
        for(let i=1;i<length-n;i++){
            current=current.next;
        }
        current.next=current.next.next
        return this.head
    }
    contain(data){
        let current=this.head;
        while(current){
            if(current.data===data){
                return true
            }
            current=current.next
        }
        return false
    }
    insertIfNotExist(data){
        if(this.contain(data)){
            console.log('already exists');
            return 
        }else{
            let newNode=new Node(data);
            newNode.next=this.head;
            this.head=newNode
        }
    }
    deleteFirst(){
    return this.head=this.head.next
    }
     deleteLast(){
        if(this.head===null){
            return 
        }
        if(this.head.next===null){
            return this.head=null
        }
        let current=this.head;
        while(current.next.next!==null){
            current=current.next
        }
        current.next=null
    }
    print(){
        let current =this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}
const link=new linkedList();
link.push(10)
link.push(20)
link.push(30)
link.push(40)
link.push(50)
link.deleteLast()
// link.removeNthFromEnd(1)
// link.insertIfNotExist(50)

link.print()