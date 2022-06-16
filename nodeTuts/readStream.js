var fs = require('fs');

var streamRead = fs.createReadStream(__dirname + '/writeit.txt','utf8');

streamRead.on('data',(data)=>{
    console.log('recieved a buffer');
    console.log(data);
});
