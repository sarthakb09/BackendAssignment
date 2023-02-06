const Joi = require('@hapi/joi');

exports.validateUser = (userData) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(8).required()
  });

  return schema.validate(userData);
};

exports.validateUpload = (uploadData) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    file: Joi.binary().required(),
  });

  return schema.validate(uploadData);
};