const fs = require('fs');

const [count, input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const array = input.split(' ').map(Number);

for (let i = 0; i < count; i++) {
    let min = i;

    for (let j = i +1; j < count; j++) {
        if (array[j] < array[min]) {
            min = j;
        }
    }

    if (i !== min) {
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
}

console.log(array.join(' '))