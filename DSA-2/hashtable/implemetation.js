class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    hash(str){
        let total=0
        let string =str.toString();
        for(let char of string){
            total+=char.charCodeAt(0)
        }
        return total%this.size
    }
    set(key,value){
        let ind=this.hash(key);
        if(!this.table[ind]){
            this.table[ind]=[];
        }
        this.table[ind].push([key,value]);
    }
    get(key){
        let indx=this.hash(key);
        let bucket=this.table[indx];
        if(bucket){
            for(let [k,v] of bucket){
                if(key===k){
                    return v
                }
            }
        }
        return undefined;
    }
    remove(key){
          let ind=this.hash(key)
          this.table[ind]=null;
    }

}
const h=new HashTable(10);
h.set('swalih','webdeveloper');
h.set('abc','letter');
h.set('bca','rotuer')
h.get('swalih')
console.log(h.get('abc'))
