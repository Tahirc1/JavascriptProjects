
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);
let db = mongoose.connection

db.on('error',(e)=>{console.log(e)})
db.once('open',()=>{console.log('connected to db')})

app.use(express.json())

const subrouter = require('./router/subs')

app.use('/subs',subrouter)


app.listen(3000,()=>{console.log("listenin to 3000")});

