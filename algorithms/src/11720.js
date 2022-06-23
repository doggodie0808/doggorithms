const fs = require('fs');
const line = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const input = {
    size : +line[0],
    list : line[1].split("").map(item=>+item),
}
const process = (input) => {
    const sum = input.list.reduce((memo,item)=> {
        memo = memo+item;
        return memo;
    });
    return sum;
};
const output = process(input);
console.log(output);