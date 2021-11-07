const {readFileSync, writeFileSync} = require('fs');

const first =  readFileSync('./content/file1.txt', 'utf8');
const second = readFileSync('./content/file2.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/file3result.txt', `Here is the result : ${first}, ${second}`)
   