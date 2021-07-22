function solution(a, b) {
    return a.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue * b[currentIndex], 0)
}

const a = [1, 2, 3, 4]
const b = [0, 0, 3, 4]

console.log(solution(a, b))
