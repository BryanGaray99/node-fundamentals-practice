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