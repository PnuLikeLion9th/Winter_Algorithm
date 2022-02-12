function solution(info, edges) {
  let answer = 0;
  let array = new Array(info.length).fill(0).map((e) => new Array());
  for (const i of edges) {
    array[i[0]].push(i[1]);
    array[i[1]].push(i[0]);
  }

  let visited = new Array(info.length).fill(0);

  function dfs(n, sheep, wolf, visit) {
    visit[n] = 1;
    if (info[n] == 0) {
      sheep += 1;
    } else {
      wolf += 1;
    }
    if (wolf - sheep >= 0) {
      return;
    } else {
      answer = Math.max(answer, sheep);
    }
    for (const i of array[n]) {
      if (visit[i] != 1) {
        dfs(i, sheep, wolf, visit);
      }
    }
    return;
  }
  dfs(0, 0, 0, visited);
  console.log(answer);
  return answer;
}

solution(
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [
    [0, 1],
    [1, 2],
    [1, 4],
    [0, 8],
    [8, 7],
    [9, 10],
    [9, 11],
    [4, 3],
    [6, 5],
    [4, 6],
    [8, 9],
  ]
);
