// Этот модуль - ранер для веб сервера.
// Он запускает http сервер на express и ws сервер на socket.io
const log = require('logger').common;
const httpServer = require('./http');
// const wsServer = require('./ws');

const init = async () => {
  log.info('Init web servers');
  // запускаем http сервер, но не включаем роуты
  const server = await httpServer();
  // запускаем ws сервер. Закоментируйте следующую строчку, если вам не нужен ws сервер
  // await wsServer(server);
  // Включаем http роуты.
  httpServer.enableRoutes();
};

module.exports = init;
