class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;

        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;

        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);

        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }

    removeVertex(ver) {
        if (this.adjacencyList[ver]) {
            delete this.adjacencyList[ver];
        }

        for (let i in this.adjacencyList) {
            this.adjacencyList[i] = this.adjacencyList[i].filter(v => v !== ver);
        }
    }

    DFS = (vertex) => {
        const iterated = {}, result = [];

        function iter(vertex) {
            iterated[vertex] = true;
            result.push(vertex);
            for (let i of list[vertex]) {
                if (!iterated[i]) {
                    iter(i);
                }
            }
        }

        iter(vertex);
        return { iterated, result }
    }



    BFS = (vertex) => {
        if (!vertex) return

        const queue = [], result = [], visited = {};
        queue.push(vertex);

        while (queue.length) {
            const current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach(element => {
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element);
                }
            });
        }
    }

    // breadthFirst(start){
    //     const queue = [start];
    //     const result = [];
    //     const visited = {};
    //     let currentVertex;
    //     visited[start] = true;

    //     while(queue.length){
    //         currentVertex = queue.shift();
    //         result.push(currentVertex);


    //         this.adjacencyList[currentVertex].forEach(neighbor => {
    //             if(!visited[neighbor]){
    //                 visited[neighbor] = true;
    //                 queue.push(neighbor);
    //             }
    //         });
    //     }
    //     return result;
    // }
}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");

const list = {
    A: ["B", "E"],
    B: ["A", "C", "D"],
    C: ["B", "D"],
    D: ["B", "C", "E", "F"],
    E: ["A", "D"],
    F: ["D"]
}

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");
g.addEdge("D", "F");
console.log(g.adjacencyList);