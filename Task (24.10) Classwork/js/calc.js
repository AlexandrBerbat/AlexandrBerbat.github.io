/* eslint-disable linebreak-style */


const model = require('./model');

module.exports = model.filter(e => e.mass > 100);
