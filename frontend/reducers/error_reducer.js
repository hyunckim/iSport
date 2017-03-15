import { RECEIVE_SIGNUP_ERRORS, RECEIVE_LOGIN_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

const _defaultState =  {
  signup: [],
  login: []
} ;

const ErrorReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SIGNUP_ERRORS:
    let newState = merge({}, state);
    newState.signup.push(action.signup);
    return newState;

    case RECEIVE_LOGIN_ERRORS:
      let newState2 = merge({}, state);
      newState2.login.push(action.login);
      return newState2;
    default:
      return state;
  }
};

export default ErrorReducer;
