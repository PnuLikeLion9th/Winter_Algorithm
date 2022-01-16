/위상정렬

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el=>el.split(' ').map(Number))
const [N,M] = input.shift();

const result = [];
//그래프에는 
const graph = new Array(N+1).fill(0).map(el=>new Array());
//진입차수
const indegree = new Array(N+1).fill(0);
const q = [];


for(let i=0; i<M; i++){
    const lst = input[i];
    for(let j=0; j<lst.length-1; j++){
        graph[lst[j]].push(lst[j+1]);
        indegree[lst[j+1]] += 1;
    }
}

for(let i=1; i<N+1; i++){
    if(indegree[i] == 0){
        q.push(i)
    }
}

while(q.length){ 
    const num = q.shift(); 
    result.push(num); 
    graph[num].forEach(next=>{
        indegree[next] -=1; //q에서 빠져나온 친구랑 연결되있던 친구의 진입차수를 하나 빼준다.
        if(indegree[next]==0){ //진입차수를 뺐는데 걔가 0이다.
            q.push(next); //q에다가 추가를 한다.
        }
    })
}
console.log(result.join(' '))