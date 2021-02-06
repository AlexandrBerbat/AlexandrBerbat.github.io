// конфигурация базы данных
module.exports = {
  uri: 'mongodb://localhost:27017/testdb',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  salt: 'a2!#$@zd',
};
