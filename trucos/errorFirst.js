function asyncFunction (callback) {
    setTimeout(function() {
        try {
            let a = 10 + b;
            callback(null, a)
        } catch (error) {
            callback(error);
        }
    }, 1000);
};

asyncFunction(function(error, result) {
    if (error) {
        console.error(`Tenemos el error: ${error}`);
        return false;
    } else {
        console.log(`Todo bien, el resultado es ${result}`);
    }
});