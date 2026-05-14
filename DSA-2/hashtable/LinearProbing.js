class hashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    hash(str){
        let string= str.toString();
        let count=0;
        for(let char of string){
            count+=char.charCodeAt(0);
        }
        return count%this.size;
    }
    set(key,value){
        let index=this.hash(key);
        while(this.table[index]!==undefined){
            index=(index+1)%this.size
        }
        this.table[index]=[key,value];
    }
    get(key){
        let index=this.hash(key);
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index=(index+1)%this.size
        }
        return undefined
    }
}
const h=new hashTable(10);
h.set('name','suwalih')
h.set('swalih','developer');
h.set('abc','doctor');
h.set('cba','nasar');
console.log(h.get('cba'))