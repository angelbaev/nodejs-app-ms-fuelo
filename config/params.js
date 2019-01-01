module.exports = {
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || 'dev',
  dbPath: __dirname + '/../db/ms_fuelo.db', //':memory:'
  clusterOptimization: false,
  httpAppUserUrl: 'https://app-ms-user.herokuapp.com/',
  cacheDuration: (60 * 1000)
};