// Этот файл являеться непосредствено подключением express. Он не сделан 
// Мы вынесли это отдельно, Чтобы в раннере http сервера, вы могли заменить его на любой другой http сервер

const port = require('config').server.port;
const expressCallback = require('servers/http'); // В сгенерированном по умолчанию express приложению, файл httpServ назывался app.js

expressCallback.set('port', port);

module.exports = expressCallback;
