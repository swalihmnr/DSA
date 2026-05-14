class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    hash(key){
        let str=key.toString();
        let count=0;
        for(let char of str){
            count+=char.charCodeAt(0);
        }
        return count%this.size;
    }
    hash1(key){
        let str=key.toString();
        let count=0;
        for(let char of str){
            count+=char.charCodeAt(0);
        }
        let prime=3;
        return prime-(count%prime)
    }
    set(key,value){
        let index=this.hash(key);
        let steps=this.hash1(key);
        let i =1;
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
              return this.table[index][1]=value
            }
            index=(index+i*steps)%this.size;
            i++
        }
        this.table[index]=[key,value]
    }
    get(key){
        let index=this.hash(key);
        let step=this.hash1(key)
        let i =1;
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index=(index+i*step)%this.size
        }
        return console.log('there key is not there')
    }
}
const h=new hashTable(0);
h.set('swalih','webdeveloper');
h.set('swailh','from erth');
console.log(h.get('swalih'))