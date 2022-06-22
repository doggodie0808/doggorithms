const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const item = {
    length : input[0],
    inputs : input[1].split(""),
}

const process = (item) => {
    let sum=0;
    for (let index = 0; index <item.length ; index++) {
        sum = sum + Number(item.inputs[index]);
    }
    return sum;
}

const output = process(item);
console.log(output);