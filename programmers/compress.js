function solution(msg) {
    const answer = [];
    const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let cursor;
    let i = 0;
    while (1)
    {
        cursor = 1;
        while (1)
        {
            let toFind = msg.substr(i, cursor);
            if (dictionary.lastIndexOf(toFind) === -1) {
                dictionary.push(toFind);
                answer.push(dictionary.indexOf(msg.substr(i, cursor - 1)) + 1);
                break ;
            } else {
                if (i + cursor > msg.length)
                {
                    answer.push(dictionary.indexOf(toFind) + 1);
                    return answer;
                }
                ++cursor;
            }
        }
        i += (cursor - 1);
        if (i > msg.length - 1)
            return answer;
    }
}

const msg = "KAKAO";
console.log(solution(msg));