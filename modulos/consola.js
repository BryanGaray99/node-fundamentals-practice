console.group('Ejemplos de uso de consola:');
    console.log('Inicia el proceso');
    console.info('Info sobre el proceso');
    console.warn('Advertencia sobre el proceso');
    console.error('Error en el proceso');

    var tabla = [
        {nombre: 'Bryan', edad: 23},
        {nombre: 'Jannina', edad: 23},
    ]
    console.table(tabla);
console.groupEnd('Consola');

console.count('Contador');
console.count('Contador');
console.count('Contador');
console.countReset('Contador');
console.count('Contador');
