var http = require('http');
var port = '8081';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(port);

console.log('Start web server on port:' + port);