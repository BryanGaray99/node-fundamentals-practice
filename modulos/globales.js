// Podemos ver el objeto donde están todos los módulos globales con:
console.log(setTimeout);

// Uso de setInterval y clearInterval
let i = 0;
let intervalo = setInterval(function() {
    console.log(`Contador: ${i}`);
    if (i == 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

// Uso de setImmediate
setImmediate(function() {
    console.log('Hola');
});

// Procesos:
console.log(process);

// Directorio y archivo actual
console.log(`Directorio: ${__dirname}`);
console.log(`Archivo: ${__filename}`);

// Establecer una variable global
globalThis.miVariable = 'Buser';
console.log(miVariable);