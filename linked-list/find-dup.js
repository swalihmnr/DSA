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

    // findDup(){
    //     let current =this.head;
    //     while(current){
    //             let runner=current.next;
    //             while(runner){
    //                 if(runner.data===current.data){
    //                     console.log(`'Duplicate value dectected...${current.data}`)
    //                     break
    //                 }
    //                 runner=runner.next
    //             }
    //          current=current.next
    //     }
    // }
    //best way for finding dup o(n)
    findDup(){
        let current=this.head;
        let seen =new Set()
        let prev=null
        while(current){
            if(seen.has(current.data)){
                prev.next=current.next
            }else{
                seen.add(current.data)
                prev=current
            }
            current=current.next
        }
    }
    findDupSpecial(value){
        let current =this.head
        let prev=null
        let seen =new Set();
        while(current){
            if(seen.has(current.data)){
                if(value===current.data){
                    prev.next=current.next
                }
            }else{
                seen.add(current.data)
                prev=current
            }

            current=current.next
        }
    }
  

}
const link=new LinkedList();
link.insert(10)
link.insert(20)
link.insert(30)
link.insert(40)
link.insert(180)
link.insert(10)
link.insert(30)
link.insert(40)
link.print()
// link.findDupSpecial(30)
console.log('---------------')
link.print()
