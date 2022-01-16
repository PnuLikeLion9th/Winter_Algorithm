// 위상정렬

const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(el=>el.split(' ').map(Number));
const n = input.shift()[0];
const result = new Array(n+1).fill(0);
const indegree = new Array(n+1).fill(0);
const graph = new Array(n+1).fill(0).map(el=>new Array());
const time = new Array(n+1).fill(0);
const q = new Array();


//연결된 노드를 추가해줘야함
for(let i=0; i<n; i++){
    time[i+1] = input[i].shift();
    input[i].pop()
    indegree[i+1] = input[i].length;
    for(let j=0; j<input[i].length; j++){
        graph[input[i][j]].push(i+1)
    }
}

for(let i=1; i<n+1; i++){
    if(indegree[i] == 0){
        result[i] = time[i];
        q.push(i)
    }
}

while(q.length){
    const num = q.shift();
    for(const next of graph[num]){
        indegree[next] -=1;
        result[next] = Math.max(result[next],result[num]+time[next]);
        if(indegree[next] == 0){
            q.push(next)
        }
    }
}

for(let i=1; i<n+1; i++){
    console.log(result[i])
}
