const nodemailer = require('nodemailer');

const {
  NODE_ENV,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_ADDRESS,
  EMAIL_PASS,
  TEST_EMAIL_ADDRESS,
  TEST_EMAIL_PASS,
  EMAIL_SUBJECT,
} = require('../config');
const { EMAIL_SUCCESS_MESSAGE, EMAIL_ERROR_MESSAGE } = require('../constants');

const transporter = nodemailer.createTransport({
  port: EMAIL_PORT,
  host: EMAIL_HOST,
  auth: {
    user: `${NODE_ENV === 'production' ? EMAIL_ADDRESS : TEST_EMAIL_ADDRESS}`,
    pass: `${NODE_ENV === 'production' ? EMAIL_PASS : TEST_EMAIL_PASS}`,
  },
  secure: true,
});

module.exports.sendMail = (req, res, next) => {
  const {
    theme,
    userName,
    userPhone,
    policy,
  } = req.body;
  const text = `
    Тема: ${theme};
    Имя клиента: ${userName};
    Телефон: ${userPhone};
    Согласие с Политикой конфиденциальности: ${policy ? 'Да' : 'Нет'}.`;
  const html = `
      <p>Тема: ${theme};</p>
      <p>Имя клиента: ${userName};</p>
      <p>Телефон: ${userPhone};</p>
      <p>Согласие с Политикой конфиденциальности: ${policy ? 'Да' : 'Нет'}.</p>`;
  const mailData = {
    from: EMAIL_ADDRESS,
    to: EMAIL_ADDRESS,
    subject: EMAIL_SUBJECT,
    text,
    html,
  };
  transporter.sendMail(mailData)
    .then(() => {
      res.status(200).send({ message: EMAIL_SUCCESS_MESSAGE });
    })
    .catch(() => {
      next(new Error(EMAIL_ERROR_MESSAGE));
    });
};
