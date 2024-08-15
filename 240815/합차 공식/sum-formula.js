const fs = require('fs');

const num = Number(fs.readFileSync('/dev/stdin', 'utf8').trim());

let answer = [];

for (let i = 1; i <= num; i++){
    for (let j = 1; j <= i; j++) {
        if (i*i - j*j === num){
            answer.push(i);
        }
    }
}

console.log(answer.join('\n'))