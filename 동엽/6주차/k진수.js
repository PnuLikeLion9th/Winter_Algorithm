function solution(n, k) {
  var answer = 0;
  const a = n.toString(k); //진수변환

  const primefunction = (number) => {
    if (number == 2) {
      return true;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  };
  const list = a.split("0");
  list.map((e) => {
    if (e == "1" || e == "") {
      return;
    }
    if (primefunction(parseInt(e))) {
      answer += 1;
    }
  });
  return answer;
}
//진수변환 방법: const change = number.toString(진수)
//10진수로 변환 => parseInt(chagen,진수)
//풀이방법 : n을 k진수로 변경 => 변경된 수를 0을 기준으로 쪼갬 => 쪼개진 리스트 순회하면서 요소별로 소수판별 검사
