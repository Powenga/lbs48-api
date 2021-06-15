require('dotenv').config();

const {
  PORT = 3000,
  ORIGIN = ['http://localhost:3001'],
  JWT_TOKEN,
  NODE_ENV,
} = process.env;

const DEV_SECRET_KEY = 'some-secret-key';
const SALT_ROUNDS = 10;

module.exports = {
  PORT,
  ORIGIN,
  JWT_TOKEN,
  DEV_SECRET_KEY,
  SALT_ROUNDS,
  NODE_ENV,
};
