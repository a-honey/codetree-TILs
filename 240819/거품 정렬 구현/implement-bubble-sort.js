const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const count = Number(input[0]);

const array = input[1].split(' ').map(Number);

let sorted;

do {
    sorted = true;

    for (let i = 0; i < count; i++) {
        if (array[i] > array[i+1]) {
            const temp = array[i];

            array[i] = array[i+1];
            array[i+1] = temp;

            sorted = false;    
        }
    }
} while (!sorted);

console.log(array.join(' '))