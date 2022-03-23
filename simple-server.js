const http = require('http')
const server = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.end(`Hello <b>misterBIT</b> - ${Date.now()} \n`)
})
const port = 3030;
server.listen(port, '127.0.0.1')
console.log(`Server running at http://127.0.0.1:${port}/`)
