const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // name feild condition
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 charachter";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "name feild is required";
  }
  //email feild condition
  if (validator.isEmpty(data.email)) {
    errors.email = "email feild is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "email is in invalid  ";
  }
  //password feild condition
  if (validator.isEmpty(data.password)) {
    errors.password = "password feild is required";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password must be 6 charachter";
  }
  //password confirmation
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "password feild is required";
  }
  //match passworsd
  if (!validator.equals(data.password, data.password2)) {
    errors.password = "password must be match..";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
