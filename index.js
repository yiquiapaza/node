const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log("In the root middleware");
    res.send('<h1>Root</h1>')
});

app.use('/add-product',(req, res, next) => {
    console.log('In the add product middleware');
    res.send('<h1>The "Add Product" page</h1>');
});

app.listen(3000);