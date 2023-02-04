const http = require('http');

const page = (`<h1>Hola mundo</h1><br><p>lorem ipsum</p>`)

http.createServer((req, res) => {

/*     res.setHeader('Content-Disposition', 'attachment: filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'}); */

    res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);