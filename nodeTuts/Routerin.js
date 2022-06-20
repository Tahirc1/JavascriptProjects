var http = require('http')
var fs = require('fs')

var server = http.createServer((req,res)=>
    {
       if(req.url === '/' || req.url === '/home'){
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname + '/index.html','utf-8').pipe(res)
       }else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/json'})
        var myJson={
            name:'tahir',
            work:'student',
            age:'20'
        }
        res.end(JSON.stringify(myJson))
       }else {
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('404,  Something went wrong')
       }
    });

server.listen(3000,'localhost');
console.log('server runnin at 3000');