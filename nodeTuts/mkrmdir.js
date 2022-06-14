const fs = require('fs')

// create and remove dir syncronously


fs.mkdirSync('newdir')
fs.rmdirSync('newdir');


// create and remove dir asyncronously

fs.mkdir('asyndir',()=>{
    fs.readFile('readit.txt','utf-8',(err,data)=>{
        fs.writeFile('./asyndir/writehere.txt',data,()=>{console.log('data is written')})
    })
})


fs.unlink('./asyndir/writehere.txt',()=>
{
    console.log('file removed');
    fs.rmdir('asyndir',()=>{console.log('dir removed')});
});
