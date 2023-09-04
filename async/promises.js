function sayHello(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    })
};

function toTalk(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`${nombre} dice la la la la`);
            reject('Hay un error en la ejecución');
        }, 1000);
    })
};

function sayGoodbye(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`Chao ${nombre}`);
            resolve(nombre);
        }, 1000);
    })
};

console.log('Iniciando proceso');
sayHello('Mana')
    .then(toTalk)
    .then(toTalk)
    .then(toTalk)
    .then(sayGoodbye)
    .then(() => {
        console.log('Finalizando proceso');
    })
    .catch((error) => {
        console.error('Error:', error);
    })