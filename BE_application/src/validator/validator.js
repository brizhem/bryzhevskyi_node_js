//const Joi = require("joi");

const validator = (schema) => (payload) => {
  let { error } = schema.validate(payload);

  if (error) {
    let message = error.details.map((element) => element.message).join("\n");
    return { error: message };
  }

  return true;
};

module.exports = validator;
