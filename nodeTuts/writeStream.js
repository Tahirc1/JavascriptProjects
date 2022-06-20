var http = require('http');

var fs = require('fs')

var writeStream = fs.createWriteStream(__dirname + '/writestre.txt');
let chunk = ''
for(x=0;x<10000;x++){
    chunk += "is this a big chunk og data"
}

writeStream.write(chunk,()=>{console.log('\n' +'chunk is written' + '\n')})