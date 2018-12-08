const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must between 10 and 300 character";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "text feild is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
