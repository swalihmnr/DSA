class Graph{
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
        let visited={}
        this.dfsHelper(start,visited)
    }
    dfsHelper(vertex,visited){
        visited[vertex]=true;
        conso.log(vertex)
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                this.dfsHelper(neigbor,visited);
            }
        }
    }
   bfs(start){
    let visited={};
    let queue=[];
    visited[start]=true;
    queue.push(start);
    while(queue.length>0){
        let vertex=queue.shift();
        console.log(vertex)
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                visited[neigbor]=true;
                queue.push(vertex);
            }
        }
    }
   }
    hasPath(start,target){
        let visited={};
        return this.hasHelper(start,target,visited)
    }
    hasHelper(vertex,target,visited){
        if(vertex===target){
            return true;
        }
        visited[vertex]=true;
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                if(this.hasHelper(neigbor,target,visited)){
                    return true;
                }
            }
        }
        return false
    }
    hasCycle(start){
        let visited={};
        if(this.helperCycle(start,visited,null)){
            return true;
        }
        return false
    }
    helperCycle(vertex,visited,parent){
        visited[vertex]=true;
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                if(this.helperCycle(neigbor,visited,vertex)){
                    return true;
                }
            }else if(neigbor!==parent){
                return true;
            }
        }
        return false
       
    }
removeEdge(vertex1,vertex2){
    this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter(neigbor=>neigbor!==vertex2);
    this.adjecencyList[vertex2]=this.adjecencyList[vertex2].filter(neigbor=>neigbor!==vertex1);
}
removeEdgee(vertex1,vertex2){
    this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter(neigbor=>neigbor!==vertex2)
}
    findPath(start,target){
        let visited={};
        let queue=[start];
        let parent={};
        while(queue.length>0){
            vertex=queue.shift();
            if(vertex===target){
                break;
            }
            for(let neigbor of this.adjecencyList[vertex]){
                if(!visited[neigbor]){
                    visited[neigbor]=true;
                    parent[neigbor]=vertex;
                    queue.push(neigbor);
                }
            }
        }
        let path=[];
        let current=target;
        while(current!==undefined){
            path.unshift(current);
            current=parent[current];
        }
        return path
    }
//   Find shortest distance between two vertices
findShortestDistance(start,target){
    let visited={};
    let queue=[[start,0]];
    visited[start]=true;
    while(queue.length>0){
        let [vertex,distance]=queue.shift();
        if(vertex===target){
            return distance
        }
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                visited[neigbor]=true;
                queue.push([neigbor,distance+1]);
            }
        }
    }
    return -1
}

}
const g=new Graph();
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')
g.addVertex('f')
g.addEdge('a','b');
g.addEdge('a','c');
g.addEdge('b','a');
g.removeEdgee('a','b')
console.log(g.findShortestDistance('a','c'))
// g.dfs('a')
g.bfs('a')