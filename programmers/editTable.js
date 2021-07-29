function solution(n, k, cmd) {
    const arr = Array.from({length: n}, () => 'O');
    const recentlyDeleted = [];
    for (let i = 0; i < cmd.length; ++i) {
        if (cmd[i][0] === 'U' ) {
            let toMove = Number(cmd[i].replace(/[^0-9]/g, ''));
            while (toMove) {
                --k;
                while (arr[k] === 'X')
                    --k;
                --toMove;
            }
        } else if (cmd[i][0] === 'D') {
            let toMove = Number(cmd[i].replace(/[^0-9]/g, ''));
            while (toMove) {
                ++k;
                while (arr[k] === 'X')
                    ++k;
                --toMove;
            }
        } else if (cmd[i][0] === 'C') {
            arr[k] = 'X';
            recentlyDeleted.push(k);
            let toMove = 1;
            while (toMove) {
                ++k;
                while (arr[k] === 'X')
                    ++k;
                if (arr[k] === undefined) {
                    k = recentlyDeleted[recentlyDeleted.length - 1];
                    while (toMove) {
                        --k;
                        while (arr[k] === 'X')
                            --k;
                        --toMove;
                    }
                    break ;
                }
                --toMove;
            }
        } else if (cmd[i][0] === 'Z') {
            arr[recentlyDeleted[recentlyDeleted.length - 1]] = 'O';
            recentlyDeleted.pop();
        }
    }
    return arr.join('');
}

console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]));

// U 위에 X + 'X' 가 있는 만큼 위로
// D 밑에 X + 'X' 가 있는 만큼 위로
// C 삭제하고 k는 'X'가 아닌 다음 행을 가리킴, 만약 배열의 마지막이라면 'X'가 아닌 바로 위
// 삭제됐던 k를 원래대로 돌림. 포커스는 그대로(삭제됐던 k를 가리킬 인덱스가 필요)
// 만약 삭제됐던 k가 현재 가리키고 있는 K보다 위에 있다면 k는 현재 + 1('X'는 건너뜀)

