function sayHello(nombre, callback) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`);
        callback();
    }, 1000)
}
function sayGoodbye(nombre, callback) {
    setTimeout(function() {
        console.log(`Chao ${nombre}`);
        callback();
    }, 1000)
}

function toTalk(nombre, callback) {
    setTimeout(function() {
        console.log(`${nombre} dice la la la la`);
        callback();
    }, 1000)
}

function dialog(nombre, quantity, callback) {
    if (quantity > 0) {
        toTalk(nombre, function() {
            dialog(nombre, quantity - 1, callback);
        })
    } else {
        sayGoodbye(nombre, callback);
    }
    
}

console.log('Iniciando proceso');
sayHello('Mana', function(nombre) {
    dialog('Mana', 3, function() {
        console.log('Finalizando proceso');
    });
})
