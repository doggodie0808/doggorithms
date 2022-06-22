const fs = require('fs');
const line = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const input = {
    size: +line[0],
    subject: line[1].split(" ").map(item=> +item),
}
const process = (item) => {
    const max = input.subject.reduce((memo, item) => {
        if(item > memo) {
            memo = item;
        }
        return memo;
    });
    const new_subject = input.subject.map((item) => item/max*100);
    const sum = new_subject.reduce((memo,item) => {
        memo = memo+item;
        return memo;
    });
    const avg = sum / input.size;
    return avg;
}
const output = process(input);
console.log(output);