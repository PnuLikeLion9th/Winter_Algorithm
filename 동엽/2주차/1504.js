const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(el=>el.split(' ').map(Number));
const [N,E] = input.shift()
const [v1,v2] = input.pop()

class minHeap{
    constructor(){
        this.heap = [];
    }

    getlength(){
        return this.heap.length;
    }

    swap(node,parent){
        const temp = this.heap[node]
        this.heap[node] = this.heap[parent]
        this.heap[parent] = temp;
    }

    push(node){
        this.heap.push(node)
        let index = this.heap.length-1
        let parent = Math.floor((index-1)/2)
        while(index>0 && this.heap[index]<this.heap[parent]){
            this.swap(index,parent);
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }

    pop(){
        console.log(q)
        if(this.heap.length == 1){
            const result = this.heap.pop()
            return result
        }
        const result = this.heap[0];
        let index = 0;
        this.heap[0] = this.heap.pop();

        while(this.heap[index*2+1] !== undefined && this.heap[index*2+1] < this.heap[index]){
            let smallerIndex = index*2+1
            if(this.heap[index*2+2] !== undefined && this.heap[index*2+2] < this.heap[smallerIndex]){
                smallerIndex = index*2+2
            }
            this.swap(index,smallerIndex);
            index = smallerIndex;
        }
        return result
    }
}

const q = new minHeap();
const graph = new Array(N+1).fill(0).map(el=>new Array());
let distance = new Array(N+1).fill(Infinity);
for(let i=0; i<E; i++){
    const [a,b,c] = input[i];
    graph[a].push([b,c])
    graph[b].push([a,c])
}

function extra(start,target){
    distance = new Array(N+1).fill(Infinity);
    distance[start] = 0
    q.push([0,start])

    while(q.getlength()){
        const [d,c] = q.pop();
        console.log(d,c)
        if(distance[c] < d){
            continue;
        }
        for(const i of graph[c]){
            if(distance[i[0]] > i[1]+d){
                distance[i[0]] = i[1]+d;
                q.push([distance[i[0]],i[0]])
            }
        }
    }
    return distance[target]
}

const planA = extra(1,v1)+extra(v1,v2)+extra(v2,N)
const planB = extra(1,v2)+extra(v2,v1)+extra(v1,N)

if(planA == Infinity && planB == Infinity){
    console.log(-1)
}else{
    console.log(Math.min(planA,planB))
}