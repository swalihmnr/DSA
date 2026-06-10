class TrieNode{
    constructor(){
        this.children={};
        this.endOfWord=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children=new TrieNode();
            }
            node=node.children[char];
        }
        node.endOfWord=true;
    }
    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.cihldren[char]){
                return false
            }
            node=node.children[char]
        }
        return node.endOfWord;
    }
    startWith(prefix){
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true;
    }
    autoCollect(prefix){
        let node=this.root;
        let result=[];
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }
        this.helperAuto(node,prefix,result);
        return result
    }
    helperAuto(node,word,result){
        if(node.endOfword){
            result.push(word)
        }
        for(let char in node.children){
            this.helperAuto(node.children[char],word+char,result)
        }
    }
}