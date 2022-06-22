const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const item = {
    size: input[0],
    subject: input[1].split(" "),
}
const process = (item) => {
    let subject = [...item.subject];
    let max=0;
    const new_subject = [];
    let sum=0;
    let avg=0;
    for (const item of subject) {
        if(item > max) {
            max = Number(item);
        }
    }
    for (const item of subject) {
        new_subject.push(item/max*100);
    }
    for (const item of new_subject) {
        sum = sum+item;
    }
    avg = sum / item.size;
    return avg;
}
const output = process(item);
console.log(output);