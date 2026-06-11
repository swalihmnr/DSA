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
                node.children[char]=new TrieNode();
            }
            node=node.children[char];
        }
        node.endOfWord=true;
    }
    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
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
    autoComplete(prefix){
        let result=[];
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node=node.children[char];
        }
        this.helperAuto(node,prefix,result)
        return result
    }
    helperAuto(node,word,result){
        if(node.endOfWord){
            result.push(word);
        }
        for(let char in node.children){
            this.helperAuto(node.children[char],word+char,result)
        }
    }
    delete(word){
        this.deleteHelper(this.root,word,0);
    }
    deleteHelper(node,word,index){
        if(word.length===index){
            if(!node.endOfWord){
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
    suggestion(word){
        let result=[];
        let prefix=""
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                break;
            }
            prefix+=char
            node=node.children[char]
        }
        this.suggestionHelper(node,prefix,result)
        return result
        
    }
    suggestionHelper(node,prefix,result){
        if(node.endOfWord){
            result.push(prefix);
        }
        for(let char in node.children){
            this.suggestionHelper(node.children[char],prefix+char,result)
        }
    }
    findLongestPrefix(prefix){
        let word=""
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                break;
            }
            word+=char 
            node=node.children[char];
        }
        return word
    }
}

const t=new Trie();
t.insert('car')
t.insert('cart')
t.insert('care')
t.insert('cars')
t.delete('car')
// console.log(t.autoComplete('car'))
console.log(t.suggestion('cae'))
console.log(t.findLongestPrefix('cares'))
// console.log(t.startWith('ks'))
// console.log(t.search('car'))