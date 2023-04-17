const catchError = require('../utils/catchError');

// const { CustomError } = require("../utils/helpers");

const compareSchema = (schema, property) => {
  return (request, response, next) => {
    const { error } = schema.validate(request[property], { abortEarly: false });
    if (error) {
      // throw new CustomError('Schema Validation Error', 400, 'Bad Request', { details: error.details })
      catchError(
        response.status(400).json({ message: 'Schema Validation Error', details: error.details })
      );
    } else {
      next();
    }
  };
};

module.exports = compareSchema;
