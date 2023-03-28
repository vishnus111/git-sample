const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./contentt/first.txt','utf-8')
const second = readFileSync('./contentt/subfolder/text.txt','utf-8')


writeFileSync(
    './contentt/result-sync.txt',
    `here is the result :${first},${second}`,{flag:'a'}
)