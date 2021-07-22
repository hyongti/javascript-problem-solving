function isPerfectlyPaired(s) {
    let stack = [];
    let i = 0;
    let pushCount = 0;
    while (i < s.length)
    {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(')
        {
            stack.push(s[i]);
            ++pushCount;
        }
        else if ((stack[stack.length - 1] === '{' && s[i] === '}')
                 || (stack[stack.length - 1] === '(' && s[i] === ')')
                 || (stack[stack.length - 1] === '[' && s[i] === ']'))
        {
            stack.pop();
        }
        ++i;
    }
    if (stack.length === 0 && pushCount !== 0)
        return true;
    else
        return false;
}

function solution(s) {
    let rotateIndex = 0;
    let strArr = s.split("");
    let count = 0;
    while (rotateIndex++ < strArr.length)
    {
        if (isPerfectlyPaired(strArr))
        {
            ++count;
        }
        // let firstCharacter = s[0];
        // s = s.substr(1);
        // s += firstCharacter;
        strArr.push(strArr.shift());
    }
    return count;
}

console.log(solution("{{}"))