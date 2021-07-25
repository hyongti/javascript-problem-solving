function solution(n) {
    let answer = [];
    let depth = 1;
    while (true)
    {
        if (n <= 1.5 * (Math.pow(3, depth) - 1))
            break ;
        else
            ++depth;
    }
    n = n - 1.5 * (Math.pow(3, depth - 1) - 1);
    while (--depth >= 0)
    {
        let toAdd = Math.ceil(n / Math.pow(3, depth));
        if (toAdd === 1)
            answer.push('1');
        else if (toAdd === 2)
            answer.push('2');
        else
            answer.push('4');
        n = n % Math.pow(3, depth);
    }
    return answer.join('');
}

console.log(solution(15));

// 1 1               1
// 2 2             2
// 4 3             3
// 11 4             1 - 1
// 12 5             1 - 2 
// 14 6             1 - 3
// 21 7             2 - 1
// 22 8
// 24 9
// 41 10
// 42 11
// 44 12
// 111 13
// 112 14
// 114 15    
// 121 16
// 122 17
// 124 18 
// 141 19
// 142 20 
// 144 21