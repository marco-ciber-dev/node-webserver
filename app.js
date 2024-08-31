const express = require('express')
const app = express();
require('dotenv').config();

const port=process.env.PORT;

//servir contenido estatico
app.use(express.static('public'))

app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/public/generic.html')
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/elements.html')
});

/*
app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/dashboard', function (req, res) {
    res.send('hola mundo desde el dashboard')
})*/

app.get('*', function (req, res) {
    //res.send('404 | Page not found')
    res.sendFile(__dirname+'/public/index.html')
})




app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
    
})