const { readFile,writeFile } = require('fs')

readFile('./content/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./content/result-async.txt',
    `here is the result : ${resutl},${second} `
    ,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})
})