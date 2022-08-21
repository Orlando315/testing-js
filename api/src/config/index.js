require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';

const config = {
  env,
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: env === 'dev' ? process.env.MONGO_URL : process.env.MONGO_URL_TEST,
  dbName: env === 'dev' ? process.env.MONGO_DB_NAME : process.env.MONGO_DB_NAME_TEST,
};

module.exports = { config };
