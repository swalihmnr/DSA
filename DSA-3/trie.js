class trieNode{
    constructor(){
        this.children={};
        this.endOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new trieNode()
    }
    insert(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new trieNode();
            }
            node=node.children[char]
        }
        node.endOfWord=true
    }
    search(word){
        let node= this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.endOfWord

    }
    startWith(prefix){
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
    autoComplete(prefix){
        let node =this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }
        let result=[];
        this.collectWord(node,prefix,result)
    }
    collectWord(node,word,result){
        if(node.endOfword){
            result.push(word)
        }
        for(let char in node.children){
            this.collectWord(node)
        }
    }
    delete(word){
        this.deleteHelper(this.root,word,0)
    }
    deleteHelper(node,word,index){
        if(index===word.length){
            if(!node.endOfword){
                return false
            }
            node.endOfWord=false;
            return Object.keys(node.children).length===0
        }
        let char =word[index];
        if(!node.children[char]){
            return false
        }
        let shouldDelete=this.deleteHelper(node.children[char],word,index+1);
        if(shouldDelete){
            delete node.children[char];
           return Object.keys(node.children).length===0&&!node.endOfWord
        }
        return false
       
    }

}

