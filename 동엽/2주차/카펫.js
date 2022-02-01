//완전탐색


function solution(brown, yellow) {
    for(let i=1; i<=yellow; i++){//가로
        for(let j=1; j<=i; j++){//세로
            if(i*j == yellow){
                if((i+2)*(j+2)-yellow == brown){
                    return [i+2,j+2]
                }
            }
        }
    }
}