// process viene dentro de los módulos globales

process.on('beforeExit', function() {
    console.log('Proceso antes de salir');
})
process.on('exit', function() {
    console.log('Proceso terminado');
    setTimeout(function() {
        console.log('Proceso que no termina');
    }, 0)
});

process.on('uncaughtException', (err, origin) => {
    console.log('Se ha producido un error');
    console.error(err, origin);
    setTimeout(function() {
        console.log('Esto viene después de las excepciones');
    }, 0)
});

// nonExistingFunction();