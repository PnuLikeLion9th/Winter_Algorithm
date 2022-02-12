function solution(id_list, report, k) {
  var answer = [];
  let reportlist = {};
  let counter = {};
  for (const i of id_list) {
    counter[i] = 0;
    reportlist[i] = [];
  }
  for (const i of report) {
    const [o, d] = i.split(" ");
    if (!reportlist[o].includes(d)) {
      reportlist[o].push(d);
      counter[d] += 1;
    }
  }

  for (const [o, d] of Object.entries(reportlist)) {
    let count = 0;
    for (const character of d) {
      if (counter[character] >= k) {
        count += 1;
      }
    }
    answer.push(count);
  }
  return answer;
}

//누가 누구를 신고했는지 알아야함 (신고한 계정이 정지됬는지 체크)
//const [a,b] = report.split(' ')
