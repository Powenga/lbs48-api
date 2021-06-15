const { COMMOT_ERROR_MESSAGE } = require('../constants');

module.exports.errorHandler = (error, req, res, next) => {
  const { statusCode = 500, message } = error;
  res.status(statusCode).send({
    message: statusCode === 500 ? COMMOT_ERROR_MESSAGE : message,
  });
};
