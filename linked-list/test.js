// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null
//     }
//     push(data){
//         let newNode=new Node(data);
//         if(this.head===null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=this.tail.next;
//         }
//     }
//     shift(data){
//         let newNode =new Node(data);
//         newNode.next=this.head;
//         this.head=newNode;
//     }
//     insertAfter(data,pos){
//         let newNode=new Node(data);
//         let current=this.head;
//         while(current){
//             if(current.data===pos){
//                 newNode.next =current.next;
//                 current.next=newNode;
//             }
//             current=current.next
//         }
//     }
//     insertBefore(data,pos){
//         let newNode=new Node(data);
//         if(this.head.data===pos){
//             newNode.next=this.head;
//             this.head=newNode;
//             return 
//         }
//         let current=this.head;
//         let prev=null
//         while(current){
//             if(current.data===pos){
//                 prev.next=newNode;
//                 newNode.next=current;
//             }
//             prev=current;
//             current=current.next
//         }
//     }
//     pop(value){
//         let current=this.head;
//         let prev=null
//         if(this.head.data===value){
//             let next=this.head.next

//             this.head=next;
//             return 

//         }
//         while(current){
//             if(current.data===value){
//                 prev.next=current.next
//             }
//             prev=current;
//             current=current.next;
//         }
//     }
//     reverse(){
  
//     let left=2;
//     let right=4;
//     let dummy=new Node(0);
//     dummy.next=this.head;
//     let leftStart=dummy;
//     for(let i=0;i<left-1;i++){
//         leftStart=leftStart.next
//     }
//     let current=leftStart.next;
//     for(let i =0;i<right-left;i++){
//         let next= current.next;
//         current.next=next.next;
//         next.next=leftStart.next;
//         leftStart.next=next
//     }
//     this.head =dummy.next
    
//     }
//  removeNthFromEnd(n){
//         let current=this.head;
//         let length=0;
//         while(current){
//             length++;
//             current=current.next;
//         }
//         if(length===n){
//             return this.head=this.head.next
//         }
//         current=this.head
//         for(let i=1;i<length-n;i++){
//             current=current.next;
//         }
//         current.next=current.next.next
//         return this.head
//     }
//     rmDupF(){
//         let seen =new Set();
//         let current =this.head;
//         let prev=null
//         while(current){
//             if(seen.has(current.data)){
//                 prev.next=current.next
//             }else{
//                 seen.add(current.data)
//                 prev=current;
//             }
//             current=current.next
//         }
//     }

//     rmDUp(){
//        let freq={};
//        let current=this.head;
//        while(current){
//         freq[current.data]=(freq[current.data]||0)+1
//         current=current.next
//        }
//        let dummy=new Node(0);
//        current=this.head;
//        let prev=dummy;
//        dummy.next=this.head;
//        while(current){
//         if(freq[current.data]>1){
//             prev.next=current.next
//         }else{
//             prev=current;
//         }
//         current=current.next
//         this.head=dummy.next
//        }
        
//     }
//     insertArray(arr){
//         for(let i of arr){
//             let newNode=new Node(i);
//             if(this.head===null){
//                 this.head=newNode;
//                 this.tail=newNode;
//             }else{
//                 this.tail.next=newNode;
//                 this.tail=this.tail.next;
//             }
//         }
//     }
//     findMid(){
//         let slow =this.head;
//         let fast =this.head;
//         while(fast&&fast.next){
//             slow =slow.next;
//             fast=fast.next.next;
//         }
//         console.log("mid is slow",slow.data)
//     }
    

//     print(){
//         let current=this.head;
//         while(current){
//             console.log(current.data);
//             current=current.next
//         }
//     }

// }
// const link =new linkedList();
// let arr=[1,2,3,4,5]
// // link.push(10)
// // link.push(20)
// // link.push(30)
// // link.push(420)
// // link.insertBefore(100,10)
// // link.push(10)
// // link.push(20)
// // link.push(30)
// // link.push(40)
// link.insertArray(arr)
// link.reverse()
// // link.rmDUp()
// link.print()
// // link.findMid()
// // link.pop(100)



let times=['1:23','2:23','5:23','7:23','8:33','10:23']
//console.log(fly(times,'12:23')) =12:23
//console.log(fly(times,'2:13')) = 1:23 ,return earliest time of that