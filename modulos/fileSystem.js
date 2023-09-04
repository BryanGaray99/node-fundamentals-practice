const fs = require('fs');

function write(path, content, callback) {
    fs.writeFile(path, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback('Se ha creado el archivo');
        }
    })
};
function read(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(data.toString());
        }
    })
};

function deleteFile(root, callback) {
    fs.unlink(root, (err) => {
        if (err) {
            callback(err);
        } else {
            callback('Se ha eliminado el archivo');
        }
    })
};

write(__dirname + '/escritura.txt', 'Hola, soy un archivo escrito', console.log);
read(__dirname + '/escritura.txt', console.log);
deleteFile(__dirname + '/escritura.txt', console.log);