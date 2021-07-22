function solution(n,a,b)
{
    for (let i = 1; n > 0; i++)
    {
        if (Math.abs(a - b) === 1 && Math.min(a, b) % 2 === 1)
            return i;
        n /= 2;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
}

console.log(solution(8, 4, 7))