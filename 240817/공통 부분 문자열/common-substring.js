const fs = require('fs');

const [a, b] = fs.readFileSync('/dev/stdin','utf8').trim().split('\n');

let answer = 0;

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        const splited_word = a.slice(i, j + 1);

        if (b.includes(splited_word) && splited_word.length > answer) {
            answer = splited_word.length;
        }
    }
}

console.log(answer)