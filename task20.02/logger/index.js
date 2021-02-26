const pino = require('pino');
const pinoHttp = require('pino-http'); // Тоже pino, но под http

// обычный логер, альтернатива для console.log
const commonLog = pino({ 
  prettyPrint: { colorize: true } 
});

// логер для express.
const expressLog = pinoHttp({ 
  prettyPrint: { colorize: true } 
}); 

module.exports = {
  common: commonLog,
  express: expressLog,
}
