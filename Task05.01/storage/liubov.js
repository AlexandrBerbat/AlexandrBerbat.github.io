const randInt = require('./raindInt');

const getPassArr = (len, qty) => {
    let arr = []; 
    for (let i = 0; i < qty; i++) {
        arr.push(randInt((10 ** (len - 1)), (10 ** len - 1)));
    }
    return arr;
}

module.exports = getPassArr;