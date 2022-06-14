const fs = require('fs');

// reading and writing syncronously
const read = fs.readFileSync('readit.txt','utf-8');
console.log(read,"....",'syncronously');
const write = fs.writeFileSync('writeit.txt','yes, u can write');
const readw = fs.readFileSync('writeit.txt','utf-8');
console.log(readw,".....",'syncronously');

// reading and writing asycronously
const readas = fs.readFile('readit.txt','utf-8',function(err,data){console.log(data,"asyncronously")});
const writeas = fs.writeFile('writeitasyc.txt','yes, you can write asyc',(ers,datas)=>{console.log('file is written')})

