//bfs로 풀어보자아아아아앙
function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [[0, 0, 1]];

  while (queue.length != 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx > -1 && ny > -1 && nx < row && ny < col) {
        if (maps[nx][ny] != 0 && maps[nx][ny] == 1) {
          queue.push([nx, ny]);
          maps[nx][ny] = maps[x][y] + 1;
        }
      }
    }
  }
  return maps[row - 1][col - 1] != 1 ? maps[row - 1][col - 1] : -1;
}
