// function solution(board, skills) {
//     var answer = 0;
//     for(const skill of skills){
//         //attack
//         if(skill[0] == 1){
//             for(let r=skill[1]; r<skill[3]+1; r++){
//                 for(let c=skill[2]; c<skill[4]+1; c++){
//                     board[r][c]-=skill[5]
//                 }
//             }
//         }
//         else{
//             for(let r=skill[1]; r<skill[3]+1; r++){
//                 for(let c=skill[2]; c<skill[4]+1; c++){
//                     board[r][c]+=skill[5]
//                 }
//             }
//         }
//     }
//     for(const row of board){
//         answer+=row.filter((e)=>e>0).length
//     }
//     return answer;
// }
//효율성 실패
//해설 보니 누적합으로 풀어야 한다고 한다.시간복잡도.O(N+M*K)

function solution(board, skills) {
  var answer = 0;
  let somearray = new Array(board.length)
    .fill(0)
    .map((e) => new Array(board.length).fill(0));
  for (const skill of skills) {
    if (skill[0] == 1) {
        somearray[skill[1]][skill[2]] = skill[5]
        somearray[skill[]]
    } else {
    }
  }
}
