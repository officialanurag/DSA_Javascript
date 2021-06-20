/**
 * Linked List Node
 */
class Node {
    constructor(val) {
        this.node = val;
        this.next = null;
    }
}

/**
 * Queue
 */
const Queue = function () {
    queue = [];

    function push(data) {
        queue.push(data);
    }

    function pop() {
        return queue.shift();
    }

    function front() {
        return queue[0];
    }

    function print() {
        console.log(queue);
    }

    function empty() {
        return queue.length < 1;
    }

    return { push, pop, front, print, empty };
}

/**
 * Stack
 */
const Stack = function () {
    const stack = [];

    function push(data) {
        stack.push(data);
    }

    function pop() {
        stack.pop();
    }

    function top() {
        return stack[stack.length - 1];
    }

    function print() {
        console.log(stack);
    }

    function empty() {
        return stack.length < 1;
    }

    return { push, pop, top, print, empty }; 
}

/**
 * Graphs Dataset
 */
GRAPH_1 = {'input': [0, [1, 2, 3], 1, [2, 4], 2, [3, 4, 5], 3, [5], 4, [5]], 'n': 6};
GRAPH_2 = {'input': [0, [1, 6], 1, [2, 4, 5], 2, [3, 6], 3, [5], 4, [6]], 'n': 7};
GRAPH_3 = {'input': [0, [1, 3], 1, [2, 3, 5, 6], 2, [3, 4, 5], 3, [4], 4, [6]], 'n': 7};


function GraphUsingAdjList(graphInput) {
    const vertices = [];

    for (let i = 0; i < graphInput.n; i++) {
        vertices.push(new Node(i));
    }

    function linkNode(start, end) {
        if (vertices[start].next !== null) {
            let temp = vertices[start];
            while (temp.next !== null) {
                temp = temp.next;
            }

            temp.next = new Node(end);
        } else {
            vertices[start].next = new Node(end);
        }

        if (vertices[end].next !== null) {
            let temp = vertices[end];
            while (temp.next !== null) {
                temp = temp.next;
            }

            temp.next = new Node(start);
        } else {
            vertices[end].next = new Node(start);
        }
    }

    function createGraph(arr) {
        let node = null;
        arr.forEach(elem => {
            if (Array.isArray(elem)) {
                elem.forEach(_ele => linkNode(node, _ele));
            } else {
                node = elem;
            }
        })
    }

    function printGraph() {
        let output = '';
        for (let i = 0; i < vertices.length; i++) {
            let temp = vertices[i];
            output += '( ' + temp.node + ' )' + ' -> ';
            temp = temp.next;
    
            while (temp !== null) {
                output += '[ ' + temp.node + ' ]' + (temp.next === null ? '' : ' -> ');
                temp = temp.next;
            }
    
            output += '\n';
            console.log(output);
            output = '';
        }
        
    }

    function printAdjNodes(node) {
        if (node > vertices.length - 1) {
            console.log('Graph has only 6 nodes: 0, 1, 2, 3, 4, 5. Kindly choose from following.')
            return;
        }

        let output = '';
        let temp = vertices[node];
        
        output += '( ' + temp.node + ' )' + ' -> ';
        temp = temp.next;

        while (temp !== null) {
            output += '[ ' + temp.node + ' ]' + (temp.next === null ? '' : ' -> ');
            temp = temp.next;
        }
        
        output += '\n';
        console.log(output);
        output = '';
    }

    function printNode(data) {
        if (data !== null )
            console.log(data.node + ' ');
    }

    function bfs(start) {
        const q = Queue();
        const visitied = {};
        vertices.forEach(vertice => visitied[vertice.node] = false);

        q.push(vertices[start].node);
        visitied[vertices[start].node] = true;

        while(!q.empty()) {
            let front = vertices[q.pop()];
            
            printNode(front);

            while(front.next !== null) {
                front = front.next;
                
                if (!visitied[front.node]) {
                    q.push(front.node);
                    visitied[front.node] = true;
                }
            }
             
        }
        
    }

    function dfs(start) {
        const stack = Stack();
        const visitied = {};
        vertices.forEach(vertice => visitied[vertice.node] = false);

        stack.push(vertices[start].node);
        visitied[vertices[start].node] = true;
        console.log(vertices[start].node);

        while (!stack.empty()) {
            let top = vertices[stack.top()];
            let v = 0;

            while (top.next !== null) {
                if (!visitied[top.next.node]) {
                    stack.push(top.next.node);
                    visitied[top.next.node] = true;
                    v = 1;
                    console.log(top.next.node);
                    break;
                }
                top = top.next;
            }

            if (v === 0) {
                stack.pop();
            }
        }
    }

    createGraph(graphInput.input);
    dfs(0)
}

function main() {
    /**
     * @input {graphInput}
     * GRAPH_1, GRAPH_2, GRAPH_3
     */
    GraphUsingAdjList(GRAPH_1);
}

main();