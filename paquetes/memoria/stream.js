const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF-8');
readableStream.on('data', (chunk) => {
    data += chunk;
})

readableStream.on('end', () => {
    console.log(data);
})

// Vamos a leer por chunks el archivo anterior y transformar a mayúsculas
const Transform = stream.Transform;
function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, encoding, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
};

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);


