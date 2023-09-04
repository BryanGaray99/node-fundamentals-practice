function sayHello(nombre, callback) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`);
        callback();
    }, 1500)
}
function sayGoodbye(nombre, callback) {
    setTimeout(function() {
        console.log(`Chao ${nombre}`);
        callback();
    }, 1000)
}

console.log('Iniciando proceso');

sayHello('Dos', function() { });
sayGoodbye('Dos', function() { });

sayHello('Uno', function() {
    sayGoodbye('Uno', function() {
        console.log('Terminando proceso');
    })
});

// sayHello('Dos', function() { });
// sayGoodbye('Dos', function() { });