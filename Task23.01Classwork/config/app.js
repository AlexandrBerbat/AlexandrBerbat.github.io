const path = require('path');
// общие параметры приложения. Обычно тут храниться все что не нашло себе место в других местах

module.exports = {
  name: 'BaseApp3',
  rootDir: path.resolve(__dirname, '../'),
  tmpDir: path.resolve(__dirname, '../', 'tmp'),
};
