const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva Petición');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, estas leyendo la información');
            res.end();
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Pagina no encontrada');
            res.end();
    }
};

console.log('Escuchando el puerto 3000');