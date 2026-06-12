class grph{
    constructor(){
        this.adjecencyList={};
    }
    addVertex(vertex){
        if(this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].push(vertex2);
        this.adjecencyList[vertex2].push(vertex1);
    }
   dfs(start){
    let visited={};
    this.dfsHelper(start,visited);
   }
   dfsHelper(vertex,visited){
    visited[vertex]=true;
    console.log(vertex);
    for(let neigbor of this.adjecencyList[vertex]){
        if(!visited[neigbor]){
            this.dfsHelper(neigbor,visited);
        }
    }
   }
   bsf(start){
    let queue=[];
    let visited={};
    queue.push(start);
    visited[start]=true;
    while(queue.length>0){
        let vertex=queue.shift();
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                visited[neigbor]=true;
                queue.push(neigbor);
            }
        }
    }
   }
   haspath(start,target){
    let visited={}
    return this.hasHelper(start,target,visited)
   }
   hasHelper(vertex,target,visited){
    visited[vertex]=true;
    if(vertex===target){
        return true;
    }
    for(let neigbor of this.adjecencyList[vertex]){
        if(!visited[neigbor]){
            if(this.hasHelper(vertex,target,visited)){
                return true;
            }
        }
    }
   }
   removeEdge(vertex1,vertex2){
    this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter(neigbor=>neigbor!==vertex2);
    this.adjecencyList[vertex2]=this.adjecencyList[vertex2].filter(neigbor=>neigbor!==vertex1);
   }
   removeVertex(vertex){
    while(this.adjecencyList[vertex1].length){
        let adjecentVertex=this.adjecencyList[vertex].pop();
        this.removeEdge(vertex,adjecentVertex);
    }
   }
   hasCycle(start){
    let visited={};
    if(this.cycleHelper(start,visited,null)){
        return true;
    }
    return false
   }
   cycleHelper(vertex,visited,parent){
    visited[vertex]=true;
    for(let neigbor of this.adjecencyList[vertex])
        if(!visited[neigbor]){
            if(this.cycleHelper(neigbor,visited,vertex)){
                return true;
            }
        }
        return false
   }
   findPath(start,target){
    let visited={};
    let parent={};
    let queue=[start];
    while(queue.length>0){
        let vertex=queue.shift();
        if(target===vertex){
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
    let current=target;
    let path=[];
    while(current!==undefined){
        path.push(current);
        current=parent[current];
    }
    return path

   }
   findShortesDistence(start,target){
    let queue=[];
    let visited={};
    queue.push([start,0]);
    while(queue.length>0){
        let [vertex,distence]=queue.shift();
        if(vertex===target){
            return distence
        }
        for(let neigbor of this.adjecencyList[vertex]){
            if(!visited[neigbor]){
                visited[neigbor]=true;
                queue.push(neigbor,distence+1);
            }
        }
        return -1
    }
   }
   
}