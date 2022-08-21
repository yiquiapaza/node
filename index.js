const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log("this always run");
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('In the add product middleware');
    res.send(`
        <form>
            <input type="text" name"title">
                <button type="submit">Add product</button>
            </input>
        </form>`);
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')    
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>')
})

app.listen(3000);