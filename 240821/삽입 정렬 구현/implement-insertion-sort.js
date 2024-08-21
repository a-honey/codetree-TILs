const fs = require('fs');

const [num, input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const array = input.split(' ').map(Number);

for (let i = 1; i < Number(num); i++) {
    let j = i - 1;
    let target = array[i];

    while (j >= 0 && array[j] > target) {
        array[j+1] = array[j];
        j--;
        array[j+1] = target;
    }
}

console.log(array.join(' '))