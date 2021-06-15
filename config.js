require('dotenv').config();

const {
  PORT = 3000,
  ORIGIN = ['http://localhost:3001'],
  JWT_TOKEN,
  NODE_ENV,
  EMAIL_HOST,
  EMAIL_PORT = 465,
  EMAIL_ADDRESS,
  EMAIL_PASS,
  EMAIL_SUBJECT = 'Новое обращение с сайта',
  TEST_EMAIL_ADDRESS,
  TEST_EMAIL_PASS,
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
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_ADDRESS,
  EMAIL_PASS,
  TEST_EMAIL_ADDRESS,
  TEST_EMAIL_PASS,
  EMAIL_SUBJECT,
};
