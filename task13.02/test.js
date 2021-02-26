const crypto = require('crypto');

let pass = '123';

passToHash = (pass) => {
    return crypto.createHmac('sha256', pass)
        .update('a2!#$@zd')
        .digest('hex');
}

console.log('123', passToHash('123'));
console.log('124', passToHash('124'));
console.log('125', passToHash('125'));
console.log('126', passToHash('126'));