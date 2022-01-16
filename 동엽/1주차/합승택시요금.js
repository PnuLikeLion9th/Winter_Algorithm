//플루이드 와샬 알고리즘 + 그리디

function solution(n, s, a, b, fares) {
    var answer = Infinity;
    const board = new Array(n).fill(0).map(e=>new Array(n).fill(Infinity));
    for(let i=0; i<n; i++){
        board[i][i] = 0
    }
    for(let i=0; i<fares.length; i++){
        board[fares[i][0]-1][fares[i][1]-1] = Math.min(board[fares[i][0]-1][fares[i][1]-1],fares[i][2]);
        board[fares[i][1]-1][fares[i][0]-1] = Math.min(board[fares[i][1]-1][fares[i][0]-1],fares[i][2])
    }
    for(let k=0; k<n; k++){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                board[i][j] = Math.min(board[i][j],board[i][k]+board[k][j])
                }
            }
        }
    for(let i=0; i<n; i++){
        answer = Math.min(answer,board[s-1][i]+board[i][a-1]+board[i][b-1])
    }
    return answer;
}
