// 0 1 2
// 5 7 9
// 21  // 9 7 5 210

// 큰 수부터 앞으로, 비용계산

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const nums = input[0];
const prices = input[1].split(' ');
let money = input[2];

let answer = [];

for (let i = nums - 1; i >= 0; i--) {
    if (money <= 0) {
        return;
    }
    answer.push(i);
    money = money - prices[i];
}

console.log(answer.join(''));