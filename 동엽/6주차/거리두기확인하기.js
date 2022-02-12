//빈공간의 경우 상하좌우에 사람이 2명이상일 경우 false
//사람일 경우 상하좌우에 1명이라도 있으면 false

function solution(parameter) {
  var answer = [];
  let places = parameter;
  outer: for (let place of places) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (place[row][col] == "O") {
          let people = 0;
          for (let i = 0; i < 4; i++) {
            let nx = row + dx[i];
            let ny = col + dy[i];
            if (nx > -1 && ny > -1 && nx < 5 && nx < 5) {
              if (place[nx][ny] == "P") {
                people += 1;
              }
            }
          }
          if (people > 1) {
            answer.push(0);
            continue outer;
          }
        }
        if (place[row][col] == "P") {
          for (let i = 0; i < 4; i++) {
            let nx = row + dx[i];
            let ny = col + dy[i];
            if (nx > -1 && ny > -1 && nx < 5 && ny < 5) {
              if (place[nx][ny] == "P") {
                answer.push(0);
                continue outer;
              }
            }
          }
        }
      }
    }
    answer.push(1);
  }
  return answer;
}
