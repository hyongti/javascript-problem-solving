// 못 풀었다 ㅠㅠ honlee 님 풀이 ㅎㅎ

const ans = [0, 0];

function press(arr, sx, sy, len) {
  for (let i = sx; i < sx + len; ++i) {
    for (let j = sy; j < sy + len; ++j) {
      if (arr[i][j] !== arr[sx][sy]) {
        const nextLen = len / 2;
        press(arr, sx, sy, nextLen);
        press(arr, sx + nextLen, sy, nextLen);
        press(arr, sx, sy + nextLen, nextLen);
        press(arr, sx + nextLen, sy + nextLen, nextLen);
        return;
      }
    }
  }
  ++ans[arr[sx][sy]];
}
function solution(arr) {
  press(arr, 0, 0, arr.length);
  return ans;
}