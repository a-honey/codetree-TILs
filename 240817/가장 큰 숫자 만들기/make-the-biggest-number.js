// 0 1 2
// 5 7 9
// 21  // 9 7 5 210

// 큰 수부터 앞으로, 비용계산

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const nums = Number(input[0]);
const prices = input[1].split(' ').map(Number);
let money = Number(input[2]);

const min_price = Math.min(...prices);
const min_price_number = prices.indexOf(min_price);
const max_length = Math.floor(money / min_price);

let answer;

if (min_price !== prices[0]) {
    answer = Array(max_length).fill(min_price_number);
    money -= max_length * min_price;
} else {
    answer = [];

    let non_zero_min_price = Math.min(...prices.slice(1));
    let non_zero_min_index = prices.indexOf(non_zero_min_price);
    
    if (money < non_zero_min_price) {
        console.log(0);
        return;
    }

    answer.push(non_zero_min_index);
    money -= non_zero_min_price;

    const remaining_length = Math.floor(money / min_price);
    answer = answer.concat(Array(remaining_length).fill(0));
    money -= remaining_length * min_price;
}

// 큰 수가 비용을 초과할 수 있음
// 6, 45 8 24 26 1 34, 7,
// 0을 제외하고 가장 작은 price로 최대 자리수를 만들어야함
// 0이면 그 다음으로 작은 수, 0으로 채우기
// 가능한 가격인지 체크 후 교체
for (let i = 0; i < max_length; i++) {
    for (let idx = nums - 1; idx >= 0; idx--) {
        const diff = prices[idx] - prices[answer[i]];
        if (answer[i] < idx && money >= diff){
            answer[i] = idx;
            money -= diff;
            break;
        }
    }
}

console.log(answer.join(''));