function solution(record) {
    const nickname = new Map();
    const answer = [];
    record.forEach(element => {
        let splitedRecord = element.split(' ');
        if (splitedRecord[0] !== 'Leave') {
            nickname.set(splitedRecord[1], splitedRecord[2]);
        }
    })
    record.forEach(element => {
        let uid = element.split(' ')[1];
        if (element.indexOf('Enter') === 0) {
            answer.push(`${nickname.get(uid)}님이 들어왔습니다.`);
        } else if (element.indexOf('Leave') === 0) {
            answer.push(`${nickname.get(uid)}님이 나갔습니다.`);
        }
    })
    return answer;
}

// const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
// solution(record);
// 같은 uid면 enter나 change에 맞게 앞에 것도 다 바꿔주기.
// enter일 때랑 leave 일 때만 메시지를 answer에 추가.