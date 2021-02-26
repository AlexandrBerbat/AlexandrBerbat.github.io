const mongoose = require('mongoose');

// Плагины
const toClientPlugin = require('./plugin/toClient');
mongoose.plugin(toClientPlugin);

const db = mongoose.connection;

module.exports = db;
