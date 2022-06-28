// import mongoose and connect db
const { fileLoader } = require('ejs');
let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/test");
// create a mongoose Schema
let todoSchema = new mongoose.Schema({item:String})
// create a mongoose collection
let todoModel = mongoose.model('todoTable',todoSchema)
// add an item to collection
let todoOne = todoModel({item:'work slow'}).save(()=>console.log("item saved"))
let data = [{item:'hello'},{item:'hi'},{item:'haallo'}]

module.exports = ((app)=>{

    app.get('/todo',(req,res)=>{
        res.render('todo', {todos : data})
    })

    app.post('/todo',(req,res)=>{
        data.push(req.body)
        console.log(data);
        res.json(data);
    })

    app.delete('/todo',(req,res)=>{

    })
})