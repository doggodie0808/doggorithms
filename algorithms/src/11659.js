const fs = require('fs');
const line = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const targetList = line[1].split(" ").map(item=> +item);
const output = [];
// 합배열 구하기
const sumList = [0];
targetList.forEach((item,index) => {
     sumList.push(sumList[index]+item)
});
// 구간합 구하기
line.slice(2).forEach((item) => {
    const [start,end] = item.split(" ").map(item=> +item);
    output.push(sumList[end]-sumList[start-1]);
});
console.log(output.join('\n'));
