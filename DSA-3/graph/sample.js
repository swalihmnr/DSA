
 class graph{
    constructor(){
        this.adjecencyList={};
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].push(vertex2);
        this.adjecencyList[vertex2].push(vertex1);
    }
    dfs(start){
        let visited={};
        this.dfshelper(start,visited);
    }
    dfshelper(vertex,visited){
        visited[vertex]=true;
        console.log(vertex);
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                this.dfshelper(neigbor,visited)
            }
        }
    }
    bfs(start){
        let queue=[];
        let visited={};
        visited[start]=true;
        queue.push(start);
        while(queue.length>0){
            let vertex=queue.shift();
            console.log(vertex)
            for(let neigbor of this.adjecencyList[vertex]){
                if(!visited[neigbor]){
                    visited[neigbor]=true;
                    queue.push(neigbor);
                }
            }
        }
    }
    hasPath(start,target){
        let visited={};
        return this.hasPathHelper(start,target,visited);
    }
    hasPathHelper(vertex,target,visited){
        if(vertex===target){
            return true
        }
        visited[vertex]=true;
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                if(this.hasPathHelper(neigbor,target,visited)){
                    return true
                }
            }
        }
        return false
    }
    hasCycle(){
        let visited={};
        for(let vertex in this.adjecencyList){
            if(!visited[vertex]){
                if(this.hasCycleHelper(vertex,visited,null)){
                    return true;
                }
            }
        }
        return false
    }
    hasCycleHelper(vertex,visited,parent){
        visited[vertex]=true;
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                if(this.hasCycleHelper(neigbor,visited,vertex)){
                    return true
                }
            }else if(neigbor!==parent){
                return true;
            }
        }
       
        return false
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter(neigbor=>neigbor!==vertex2);
        this.adjecencyList[vertex2]=this.adjecencyList[vertex2].filter(neigbor=>neigbor!==vertex1)
    }
    removeVertex(vertex){
        while(this.adjecencyList[vertex].length){
            let neigbor=this.adjecencyList[vertex].pop();
            this.removeEdge(vertex,neigbor);
        }
        delete this.adjecencyList[vertex]
    }


}

const h=new graph();
h.addVertex('a')
h.addVertex('b')
h.addVertex('c')
h.addVertex('d')
h.addEdge('a','d');
h.addEdge('a','b');
h.addEdge('b','c');
h.addEdge('c','d')
console.log(h.hasPath('b','r'))
