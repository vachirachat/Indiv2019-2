const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.IDNum = !isEmpty(data.IDNum) ? data.IDNum : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
// Email checks
  if (Validator.isEmpty(data.IDNum)) {
    errors.email = "Email field is required";
  } 
  /*else if (!Validator.isEmail(data.IDNum)) {
    errors.email = "Email is invalid";
  }*/
  
// Password checks
  if (Validator.isEmpty(data.phone)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};