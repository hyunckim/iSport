export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSignUpErrors = signup => ({
  type: RECEIVE_SIGNUP_ERRORS,
  signup
});

export const receiveLogInErrors = login => ({
  type: RECEIVE_LOGIN_ERRORS,
  login
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
