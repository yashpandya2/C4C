const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req,res) => {
    // res.send('Welcome to Home Page');
    res.json({'yash':19});
});

app.get('/contact', (req,res) => {
    // res.send('Welcome to Home Page');
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(port, () => {
    console.log('App is running......');
});