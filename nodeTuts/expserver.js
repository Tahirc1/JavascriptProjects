var express = require('express');
var path = require('path');
var app = express();
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))
app.use('/assets',express.static('assets'))
app.use(express.urlencoded({extended:true}))
app.listen(3000);
app.get('/',(req,res)=>{res.send('this is a response')})
app.get('/contact',(req,res)=>{
    console.log(req.query)
    res.render('contact',{que : req.query})
})
app.post('/contact',(req,res)=>{
    console.log(req.body);
    res.render('contact-post',{data: req.body})
})
app.get('/profile/:id',(req,res)=>{
    let data = {name: 'jason' , hobbies : ['art' , 'dance' , 'sing']} 
    res.render('profile' , {person : req.params.id, data : data} )
})