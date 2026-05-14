class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size
    }
    hash(str){
        let string =str.toString();
        let count=0;
        for(let char of string){
            count+=char.charCodeAt(0);
        }
        return count%this.size;
    }
    set(key,value){
        let i=1;
        let index=this.hash(key);
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]=value
            }
            index=(index+i*i)%this.size;
            i++
        }
        this.table[index]=[key,value];
    }
    get(key){
        let i=1;
        let index=this.hash(key)
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index=(index+i*i)%this.size
            i++
        }
    }
    display(){
        return console.log(this.table)
    }
}
const h=new HashTable(10);
h.set('swalih','developer');
h.set('swailh','roader');
h.set('swailh','roader');
console.log(h.get('swailh'));
h.display()