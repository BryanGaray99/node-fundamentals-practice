const os = require('os');

// Acceder a la arquitectura
console.log(os.arch());

// Acceder al sistema operativo
console.log(os.platform());

// Acceder al cpu
// console.log(os.cpus());

// Cantidad de cores
console.log(os.cpus().length);

// // Acceder a constantes
// console.log(os.constants);

// Espacio de memoria RAM
const SIZE = 1024;
function kb(bytes) {
    return bytes / SIZE;
};
function mb(bytes) {
    return kb(bytes) / SIZE;
};
function gb(bytes) {
    return mb(bytes) / SIZE;
};

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// Total de memoria RAM
console.log(gb(os.totalmem()));

// Directorio actual
console.log(os.homedir());
// Directorio temporal
console.log(os.tmpdir());

