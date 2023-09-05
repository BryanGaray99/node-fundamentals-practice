let suma = 0;
console.time('suma');
for (let i = 0; i < 100000000; i++) {
    suma += i;
}
console.log(suma);
console.timeEnd('suma');

let suma2 = 0;
console.time('suma2');
for (let j = 0; j < 1000000; j++) {
    suma2 += j;
}
console.log(suma2);
console.timeEnd('suma2');

function sumaAsincrona () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let suma = 0;
            for (let i = 0; i < 100000000; i++) {
                suma += i;
            }
            resolve(suma);
        }, 1000);
    })
}

console.time('sumaAsincrona');
sumaAsincrona()
    .then((suma) => {
        console.log(suma);
        console.timeEnd('sumaAsincrona');
});