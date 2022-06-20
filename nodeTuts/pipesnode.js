var fs = require('fs');

var streamRead = fs.createReadStream(__dirname + '/readit.txt','utf8');

var streamWrite = fs.createWriteStream(__dirname + '/write2.txt');

streamRead.pipe(streamWrite);
