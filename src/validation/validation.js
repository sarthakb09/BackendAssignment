// const Joi = require('@hapi/joi');

// exports.validateUser = (userData) => {
//   const schema = Joi.object({
//     username: Joi.string().min(5).required(),
//     password: Joi.string().min(8).required()
//   });

//   return schema.validate(userData);
// };

// exports.validateUpload = (uploadData) => {
//   const schema = Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     file: Joi.binary().required(),
//   });

//   return schema.validate(uploadData);
// };

const Joi = require('@hapi/joi');

// Validate user data
exports.validateUser = (userData) => {
  // Define the validation schema for user data
  const schema = Joi.object({
    // username should be a string with minimum length of 5 characters and is required
    username: Joi.string().min(5).required(),
    // password should be a string with minimum length of 8 characters and is required
    password: Joi.string().min(8).required()
  });

  // Validate the user data against the defined schema and return the result
  return schema.validate(userData);
};

// Validate upload data
exports.validateUpload = (uploadData) => {
  // Define the validation schema for upload data
  const schema = Joi.object({
    // title should be a required string
    title: Joi.string().required(),
    // description should be a required string
    description: Joi.string().required(),
    // file should be a required binary
    file: Joi.binary().required(),
  });

  // Validate the upload data against the defined schema and return the result
  return schema.validate(uploadData);
};
