function solution(n, t, m, p) {
    const map = new Map();
    for (let i = 1; i <= m; ++i)
        map.set(i, []);
    let number = 0;
    let index = 1;
    while (true) {
        let converted = number.toString(n).split('');
        while (converted.length > 0) {
            map.get(index).push(converted.shift());
            if (map.get(p).length === t)
                return map.get(p).join('').toUpperCase();
            if (index === m)
                index = 1;
            else
                ++index;
        }
        if (map.get(p).length === t)
            return map.get(p).join('').toUpperCase();
        ++number;
    }
}

console.log(solution(2, 4, 2, 1));

// map (1, [])