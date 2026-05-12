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