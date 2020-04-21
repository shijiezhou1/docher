var http = require('http');

var server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Welcome to Nodejs")
})

server.listen(3000);
console.log('Running in ports : 3000');