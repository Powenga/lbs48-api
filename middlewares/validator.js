const { celebrate, Joi } = require('celebrate');

module.exports.messageValidator = celebrate({
  body: Joi.object()
    .keys({
      theme: Joi.string().required().messages({
        'any.required': 'Поле "Тема" должно быть заполнено!',
        'string.empty': 'Поле "Тема" не может быть пустым!',
      }),
      userName: Joi.string().min(2).required().messages({
        'any.required': 'Поле "Имя" должно быть заполнено!',
        'string.empty': 'Поле "Имя" не может быть пустым!',
        'string.min': 'Поле "Имя" должено быть не меньше 2 символов!',
      }),
      userPhone: Joi.string().min(2).max(30).required()
        .messages({
          'any.required': 'Поле "Телефон" должно быть заполнено!',
          'string.empty': 'Поле "Телефон" не может быть пустым!',
          'string.min': 'Поле "Телефон" должно быть больше 2 символов!',
          'string.max': 'Поле "Телефон" должно быть меньше 30 символов!',
        }),
      policy: Joi.boolean().truthy(true)
        .messages({
          'boolean.truthy': 'Вы должны согласиться с политикой конфиденциальности!',
        }),
    }),
});
