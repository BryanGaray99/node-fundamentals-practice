async function sayHello(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    })
};

async function toTalk(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`${nombre} dice la la la la`);
            resolve(nombre);
        }, 1000);
    })
};

async function sayGoodbye(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log(`Chao ${nombre}`);
            resolve(nombre);
        }, 1000);
    })
};

async function main() {
    await sayHello('Bryan');
    await toTalk('Bryan');
    await toTalk('Bryan');
    await toTalk('Bryan');
    await sayGoodbye('Bryan');
    console.log('Termina el proceso')
}
main();
console.log('Inicia del proceso');