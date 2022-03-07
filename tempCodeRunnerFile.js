const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shop = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));


app.use(admin); 
app.use(shop);

app.use((req,res,next)=> {
    res.status(404).send('<h1> Page not found </h1>');
});




app.listen(3000);  