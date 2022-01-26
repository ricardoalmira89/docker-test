const http = require('http');
var moment = require('moment');

const host = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!0000000');
});

server.listen(port, host, () => {
   console.log('Web server running at http://%s:%s',host,port );
});
