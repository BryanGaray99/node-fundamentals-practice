const bcrypt = require('bcrypt');
const password = 'sogjFFQWre22';
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (err, result) => {
        console.log(result);
    })
})