var http = require('http')
var fs = require('fs')

var server = http.createServer((req,res)=>
    {
        console.log(req.url);
        res.writeHead(200,{'Content-Type':'application/json'})
        var myJson={
            name:'tahir',
            work:'student',
            age:'20'
        }
        res.end(JSON.stringify(myJson))
    });

server.listen(3000,'localhost');
console.log('server runnin at 3000');