function solution(record) {
  var answer = [];
  let user_dic = {};
  for (const i of record) {
    //들어올때 닉네임 바뀌면 이전에 닉네임도 바뀜
    //나가는건 닉네임 상관 없음
    //닉네임 변경시 이전 닉네임들도 바뀜
    const [type, user_id, nickname] = i.split(" ");
    if (type != "Leave") {
      user_dic[user_id] = nickname;
    }
  }

  for (const i of record) {
    const [type, user_id, nickname] = i.split(" ");
    switch (type) {
      case "Enter":
        answer.push(`${user_dic[user_id]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${user_dic[user_id]}님이 나갔습니다.`);
        break;
    }
  }
  return answer;
}
