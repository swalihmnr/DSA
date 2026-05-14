// stack sorting 
function stackSort(stack){
    let tempStack=[];
    while(stack.length>0){
        let temp=stack.pop()
        while(tempStack.length>0&&tempStack[tempStack.length-1]>temp){
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    return tempStack
    
}
console.log(stackSort([1,4,3,63,2,4]))

// remove specific element from stack
function spRem(arr,el){
    let tem=[]
    while(arr.length>0){
        let value=arr.pop()
        if(value!==el){
            tem.push(value)
        }

    }
    let result=[];
    while(tem.length>0){
        result.push(tem.pop())
    }
    return arr=result
}
let arr=[1,3,4,5,2,3,4];
console.log(spRem(arr,5))

// revese queue

function reverse(queue){
    let stack=[]
    while(queue.length>0){
        stack.push(queue.shift())
    }
    while(stack.length>0){
        queue.push(stack.pop())
    }
    return queue
}
console.log(reverse([1,2,3,4,5,6]))

//music player
class MusicPlayer{
    constructor(){
        this.queue=[];
        this.queue1=[];
    }
    addSong(song){
        this.queue.push(song)
    }
    playSong(){
        if(this.queue.length===0){
            return console.log("empty");
        }
       let currentSong= this.queue.shift();
       return console.log('current song'+currentSong);
       
    }
    currentSong(){
        if(this.queue.length===0){
            return console.log('there is no songs')
        }
        return this.queue[0]
    }
    nextSong(){
        if(this.queue.length===0){
            return console.log('there is no song')
        }
        let current=this.queue.shift();
        this.queue1.push(current)
        return this.queue[0];
    }
    prevSong(){
        if(this.queue1.length==0){
            return console.log('there is no song')
        }
        let song =this.queue1.pop();
        this.queue.unshift(song)
        return this.queue[0]
    }
    showPlayList(){
        if(this.queue.length===0){
            return console.log('there is no songs');
        }
        return this.queue
    }
    clearPlaylist(){
        if(this.queue.length===0){
            return console.log('htere is no songs for clear')
        }else{
            return this.queue=[]
        }
    }

}
const m=new MusicPlayer();
m.addSong('music1')
m.addSong('music2')
m.addSong('music3')
m.addSong('music4')
m.addSong('music5')
m.clearPlaylist()
console.log(m.playSong())


// musicplayer using doubly linked list

class Node{
    constructor(song){
        this.song=song;
        this.prev=null;
        this.next=null;
    }
}
class MusicPlayer{
    constructor(){
        this.head=null;
        this.tail=null;
        this.current=null;
    }
    addMusic(song){
        let newSong=new Node(song)
        if(this.head===null){
            this.head=newSong;
            this.tail=newSong;
            this.current=newSong;
        }else{
            this.tail.next=newSong;
            newSong.prev=this.tail;
            this.tail=newSong;
        }
    }
    next(){
        if(this.current.next===null){
            return console.log('there is no song');
        }
        this.current=this.current.next
        return this.current.song
    }
    prev(){
        if(this.current.prev===null){
            return console.log('there is no song');
        }
        this.current=this.current.prev
        return this.current.song
    }
    currentSong(){
      return   this.current.song
    }
}