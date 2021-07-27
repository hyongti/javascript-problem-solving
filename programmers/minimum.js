function solution(A, B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((answer, cur, idx) => answer + cur * B[idx], 0)
}

// function solution(A,B){
//     let answer = 0;
//     while (1) {
//         let minOfA = Math.min.apply(null, A);
//         let maxOfB = Math.max.apply(null, B);
//         answer += (minOfA * maxOfB);
//         A.splice(A.indexOf(minOfA), 1);
//         B.splice(B.indexOf(maxOfB), 1);
//         if (A.length === 0)
//             return answer;
//     }
// }

const A = [1, 2];
const B = [3, 4];

console.log(solution(A, B));