function asyncBreakingFunction(callback) {
    setTimeout(function() {
        try {
            return 4 + z;
        } catch(error) {
            console.error('Error en la función asíncrona');
            callback(error);
        }
    })
}

try {
    asyncBreakingFunction(function() {
        console.log('Error');
    });
} catch (error) {
    console.log(`Error: ${error}`);
};

setInterval(function() {
    console.log('El programa continua');
}, 2000);