// Crear un espacio de memoria
let buffer = Buffer.alloc(4);

// Agregar datos
let buffer2 = Buffer.from([1, 2, 3, 4]);
let buffer3 = Buffer.from('Bryan');

console.log(buffer);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());

// Buffer posicion por posicion
let abc = Buffer.alloc(26);
console.log(abc)

for (let i = 0; i < abc.length; i++) {
    abc[i] = i + 97;
}
console.log(abc.toString().toLocaleUpperCase());