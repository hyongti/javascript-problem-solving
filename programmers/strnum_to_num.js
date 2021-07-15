// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s){
    const charNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s
    for (let i = 0; i < charNum.length; i++){
        if (s.search(charNum[i]) !== -1){
            answer = answer.replace(new RegExp(charNum[i], 'g'), charNum.indexOf(charNum[i]))
        }
    }
    return parseInt(answer)
}

const str = "2three45sixsevenninesixfive"	//"one4seveneight"
console.log(solution(str))