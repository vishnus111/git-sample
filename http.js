const http = require('http')
const { listeners } = require('process')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to my home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')

    }
    res.end(`
        <h1>oops</h1>
        <p>we cant find the page you are looking for</P>
        <a href ="/">back home</a>`)
    


} )

server.listen(7000)