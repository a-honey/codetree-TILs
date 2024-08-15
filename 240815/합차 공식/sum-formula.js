const fs = require('fs');

const num = Number(fs.readFileSync('/dev/stdin', 'utf8').trim());

let answer = [];

// a = x - n, b = x + n, ab = num
// num의 약수여야함
// x = a+b / 2 이므로 a+b, a-b는 짝수

for (let a = 1; a <= num; a++ ) {
    if (num % a === 0) {
        let b = num / a;
        
        let x = (a + b) / 2;
        let n = (a - b) / 2;

        if (x > 0 && n > 0 && Number.isInteger(x) && Number.isInteger(n)) {
            answer.push(x)
        }
    }
}

if (answer.length === 0) {
    console.log(-1);
} else {
    answer.sort((a, b) => a - b);
    console.log(answer.join('\n'));
}