const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(e=>e.split(' ').map(Number));
const [n,k] = input.shift()
let dp = new Array(k+1).fill(Infinity);
dp[0] = 0;
const money = input.join(' ').split(' ').map(Number)
money.sort((a,b)=>a-b)

for(const coin of money){
    for(let j= coin; j<k+1; j++){
        dp[j] = Math.min(dp[j],dp[j-coin]+1)
    }
}
if(dp[k] === Infinity){
    console.log(-1)
}else{
    console.log(dp[k])
}
