// https://programmers.co.kr/learn/courses/30/lessons/1845

// function solution(nums) {
    // var answer = 0;
    // const newArr = new Set(nums)
    // if (newArr.size < (nums.length / 2)) {
    //     answer = newArr.size
    // } else {
    //     answer = (nums.length / 2)
    // }
    // return answer;
// }

// --> 한줄로 줄이기..
function solution(nums) {
    return Math.min(new Set(nums).size, nums.length)
}

const nums = 
[3,3,3,2,2,2]	
// [3,3,3,2,2,4]	
// [3,1,2,3]

console.log(solution(nums))