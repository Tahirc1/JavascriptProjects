var http = require('http')
var fs = require('fs')

var server = http.createServer((req,res)=>
    {
        console.log(req.url);
        res.writeHead(200,{'Content-Type':'text/html'})

        var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        readStream.pipe(res);
    });

server.listen(3000,'localhost');
console.log('server runnin at 3000');