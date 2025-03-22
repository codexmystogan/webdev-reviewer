const crypto = require('crypto');

const accessCode = '$uAc4vx1';
const hash = crypto.createHash('sha256').update(accessCode).digest('hex');
console.log(hash);

