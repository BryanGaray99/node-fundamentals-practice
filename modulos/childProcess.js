const { exec, spawn } = require('child_process');

// Listas el directorio actual
exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

// Correr un programa dentro del mismo directorio
exec('node modulos/consola.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
})

// Invocar un proceso nuevo de nodejs y obtener más datos con spawn
let proceso = spawn('cmd.exe', ['/c','dir']);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', (data) => {
    console.log(data.toString());
})
proceso.on('exit', function() {
    console.log('Proceso terminado:' + proceso.killed);
})