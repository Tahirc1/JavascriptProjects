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