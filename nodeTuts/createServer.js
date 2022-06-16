var http = require('http');

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey its working, work');
}
);

server.listen(3000,'localhost');
console.log('i am listening');
