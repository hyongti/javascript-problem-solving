function solution(s) {
    const arr = [];
    let index = 0;
    while (index < s.length) {
        if (arr.length === 0 || arr[arr.length - 1] !== s[index])
            arr.push(s[index]);
        else
            arr.pop();
        ++index;
    }
    if (arr.length === 0)
        return 1;
    else
        return 0;
}

// 첫 번째 풀이 => 효율성 다 탈락
// function solution(s)
// {
//     const arr = s.split('');
//     let index = 0;
//     while (1)
//     {
//         if (arr[index] === arr[index + 1]) {
//             arr.splice(index, 2);
//             if (index !== 0)
//                 --index;
//         } else {
//             ++index;
//         }
//         if (arr.length === 0) {
//             return 1;
//         } else if (index === arr.length)
//             return 0;
//     }
// }