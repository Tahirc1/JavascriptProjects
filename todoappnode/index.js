// imports
let express = require('express');
let todoControl = require('./controllers/todoControl');

let app = express();
// set view
app.set('view engine','ejs');
// set resource directory for assets
app.use(express.static('./public'));
app.use(express.json());
// set middleware
app.use(express.urlencoded({extended:true}))
// set port
app.listen('3000');
console.log('listenin to 3000')
// fire controller
todoControl(app);



