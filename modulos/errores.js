function callingBreakingFunction () {
    breakingFunction();
}
function breakingFunction () {
    return 4 + z;
};

try {
    console.log(callingBreakingFunction());
    console.log(breakingFunction());

} catch (error) {
    console.log(`Error: ${error}`);
};

setInterval(function() {
    console.log('El programa continua');
}, 2000);