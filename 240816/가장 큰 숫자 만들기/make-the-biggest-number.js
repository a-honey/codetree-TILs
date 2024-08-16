// 0 1 2
// 5 7 9
// 21  // 9 7 5 210

// 큰 수부터 앞으로, 비용계산

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const nums = Number(input[0]);
const prices = input[1].split(' ').map(Number);
let money = Number(input[2]);

let answer = [];

// 큰 수가 비용을 초과할 수 있음
for (let i = nums - 1; i >= 0; i--) {
    if (money - prices[i] >= 0) {    
        answer.push(i);
        money = money - prices[i];
    } else {
        continue;
    }
}

console.log(answer.join(''));