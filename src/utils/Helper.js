import { String } from "./String";
import { validations } from "./Constants";


 const validateLogin = (email, password) => {
    const errorMessage = {};
  
    if (!email) {
      errorMessage.email = String.EMAIL_REQUIRED;
    } else if (!validations.EMAIL_REGEX.test(email)) {
      errorMessage.email = String.EMAIL_VALIDATION_MESSAGE;
    }
  
    if (!password) {
      errorMessage.password = String.PASSWORD_ERROR;
    } else if (password.length < 8) {
      errorMessage.password = String.PASSWORD_LENGTH_ERROR;
    }
  
    return errorMessage;
  };

  export {
    validateLogin
  }