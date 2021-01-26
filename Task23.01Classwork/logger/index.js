const pino = require('pino');
// const pinoHttp = require('pino'); // Тоже pino, но под http

// обычный логер, альтернатива для console.log
const commonLog = pino({ 
  // prettyPrint: { colorize: true } 
  prettyPrint: true
});

// логер для express.
// const expressLog = pinoHttp({ 
  // level: process.env.LOG_LEVEL || "info",
  // prettyPrint: { colorize: true },
  // prettyPrint: true ,
  // forceColor: true,
// }); 

module.exports = {
  common: commonLog,
  // express: expressLog,
}
