module.exports = {
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || 'dev',
  dbPath: __dirname + '/../db/ms_fuelo.db', //':memory:'
  clusterOptimization: false,
  cacheDuration: (60 * 1000),
  httpAppUserUrl: 'https://app-ms-user.herokuapp.com/',
  httpApiFueloUrl: 'http://fuelo.net/api/',
  fueloApiKey: '62336c0c3b874e8'
};