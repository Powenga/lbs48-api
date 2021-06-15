const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { PORT, ORIGIN } = require('./config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { sendMail } = require('./controllers/mail');
const { messageValidator } = require('./middlewares/validator');
const { errorHandler } = require('./middlewares/error-handler');
const { NOT_FOUND_ERROR_MESSAGE } = require('./constants');
const NotFoundError = require('./errors/not-found-err');

const app = express();

app.use(
  cors({
    origin: ORIGIN,
  }),
);

app.use(helmet());
app.use(express.json());

app.use(requestLogger);

app.post('/api/mail', messageValidator, sendMail);
app.use((req, res, next) => {
  next(new NotFoundError(NOT_FOUND_ERROR_MESSAGE));
});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
