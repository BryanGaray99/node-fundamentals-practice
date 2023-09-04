// Por buenas prácticas las variables de entorno deben ser declaradas en mayusculas y subguiones como espacios
let nombre = process.env.NOMBRE_APELLIDO || 'Desconocido';
let apodo = process.env.APODO || 'Desconocido';
console.log(`Hola ${nombre}, tu apodo es ${apodo}`);