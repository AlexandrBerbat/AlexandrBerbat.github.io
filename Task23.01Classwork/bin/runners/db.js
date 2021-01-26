// ранер отвечающий за коннект к бд
const log = require('logger').common;
const mongoose = require('mongoose');
const db = require('storage/db');


// тянем настройки с конфига
const { uri, options } = require('config').db;

// сам раннер
const init = () => new Promise((resolve, reject) => {
  // если произойдет ошибка коннекта, она вызовет исключение и сработает reject
  mongoose.connect(uri, options);

  db.once('error', (err) => {
    // тут ловятся ошибки возникающие в процессе работы бд
    log.info('BD ERR:', err);
  });

  db.once('open', () => {
    // двигает дальше процесс раннинга. 
    // у монгуса есть кеш запросов. Порядок не важен, но во избежания странных ситуаций, он настроен так же, как и другие ранеры.
    log.info('Connected to DB');
    resolve();
  });

  db.once('close', () => {
    // уведомление для логов
    log.info('Close connected to DB');
  });
});

module.exports = init;
