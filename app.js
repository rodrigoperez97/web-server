const express = require('express')
const app = express();

app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home.hbs');
})


app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(8080)