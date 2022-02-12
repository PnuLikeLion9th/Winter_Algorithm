function solution(str1, str2) {
  var answer = 0;
  let lstr1 = new Array();
  let lstr2 = new Array();
  const ustr1 = str1.toUpperCase();
  const ustr2 = str2.toUpperCase();

  for (let i = 0; i < ustr1.length - 1; i++) {
    const sep = ustr1[i] + ustr1[i + 1];
    const reg = /[^A-Z]/g;
    if (!reg.test(sep)) {
      lstr1.push(sep);
    }
  }

  for (let i = 0; i < ustr2.length - 1; i++) {
    const sep = ustr2[i] + ustr2[i + 1];
    const reg = /[^A-Z]/g;
    if (!reg.test(sep)) {
      lstr2.push(sep);
    }
  }
  const set = new Set([...lstr1, ...lstr2]);
  let union = 0;
  let intersection = 0;

  for (const i of set) {
    const length1 = lstr1.filter((e) => e == i).length;
    const length2 = lstr2.filter((e) => e == i).length;
    union += Math.max(length1, length2);
    intersection += Math.min(length1, length2);
  }
  //자카드 유사도
  //두집합사이의 자카드 유사도는 두집합의 교집합 크기를 두집합 합집합 크기로 나눈값
  return union == 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
