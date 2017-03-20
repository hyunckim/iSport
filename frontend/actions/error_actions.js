export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_FEED_ERRORS = "RECEIVE_FEED_ERRORS";
export const RECEIVE_COLLECTION_ERRORS = "RECEIVE_COLLECTION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSignUpErrors = signup => ({
  type: RECEIVE_SIGNUP_ERRORS,
  signup
});

export const receiveLogInErrors = login => ({
  type: RECEIVE_LOGIN_ERRORS,
  login
});

export const receiveFeedErrors = feed => ({
  type: RECEIVE_FEED_ERRORS,
  feed
});

export const receiveCollectionErrors = collection => ({
  type: RECEIVE_COLLECTION_ERRORS,
  collection
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
