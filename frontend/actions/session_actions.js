export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import { receiveSignUpErrors, receiveLogInErrors, clearErrors } from './error_actions';
import * as SessionAPIUtil from '../util/session_api_util';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .then(() => dispatch(clearErrors()))
    .fail(error => {
      return dispatch(receiveSignUpErrors(error.responseJSON)
    );})
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .then(() => dispatch(clearErrors()))
    .fail(error => {
      return dispatch(receiveLogInErrors(error.responseJSON)
    );})
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then((user) => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
