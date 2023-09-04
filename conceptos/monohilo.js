// Probar una sola Tarea
console.log('Primera Instrucción');

// Probar multiples Tareas en un intervalo de tiempo
let i = 0;
setInterval(function() {
    console.log(`Contador: ${i}`);
    i++;
}, 1000);

// Probar multiples Tareas y forzar un error en tiempo de ejecución
let j = 10;
setInterval(function() {
    console.log(`Contador: ${j}`);
    i++;
    if (i == 10) {
        console.log('Error'); // Un error para por completo los procesos 
        var a = 10 + b;
    }
}, 1000);

// Con una segunda salida podemos ver la asincronía ya que cada instrucción se ejecuta independientemente
// en el momento correspondiente
console.log('Segunda Instrucción');
