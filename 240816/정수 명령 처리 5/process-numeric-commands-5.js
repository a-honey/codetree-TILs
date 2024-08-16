const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const count = input[0];

const command_array = input.slice(1,);

function push_pack(array, num) {
    const pushed_array = array.push(num);

    return pushed_array;  
}

function pop_back(array) {
    return array.pop();
}

function size(array) {
    console.log(array.length);
}

function getIndexNumber(array, index) {
    console.log(array[index - 1]);
}

let answer = [];

for (let i = 0; i < count; i++) {
    const row = command_array[i].split(' ');

    const command = row[0];
    const number = row[1];

    switch (command){
        case 'push_back':
            push_pack(answer, number);
            break;
        case 'get':
            getIndexNumber(answer, number);
            break;
        case 'size':
            size(answer);
            break;
        case 'pop_back':
            pop_back(answer);
            break;
    }
}