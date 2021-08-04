function solution(board, moves) {
    const basket = [];
    let answer = 0;

    moves.forEach((element) => {
        for (let index = 0; index < board.length; ++index) {
            if (board[index][element - 1] !== 0) {
                if (basket[basket.length - 1] === board[index][element - 1]) {
                    answer += 2;
                    basket.pop();
                } else {
                    basket.push(board[index][element - 1]);
                }
                board[index][element - 1] = 0;
                break ;
            }
        }
    });
    return answer;
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));