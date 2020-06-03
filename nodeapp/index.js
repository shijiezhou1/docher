let http = require('http');

let port = process.env.PORT ? process.env.PORT : 4000
let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(`Welcome to Nodejs : ${process.env.APP_NAME} : ${port}`)
})

server.listen(port);
console.log('Running in ports : ' + port);