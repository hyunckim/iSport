import { RECEIVE_SIGNUP_ERRORS, RECEIVE_LOGIN_ERRORS, CLEAR_ERRORS, RECEIVE_FEED_ERRORS, RECEIVE_COLLECTION_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

const _defaultState =  {
  signup: [],
  login: [],
  feed: []
} ;

const ErrorReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SIGNUP_ERRORS:
      let newState = merge({}, state);
      newState.signup = action.signup;
      return newState;

    case RECEIVE_LOGIN_ERRORS:
      let newState2 = merge({}, state);
      newState2.login = action.login;
      return newState2;

    case RECEIVE_FEED_ERRORS:
      let newState3 = merge({}, state);
      newState3.feed = action.feed;
      return newState3;

    case RECEIVE_COLLECTION_ERRORS:
      let newState4 = merge({}, state);
      newState4.collection = action.collection;
      return newState4;

    case CLEAR_ERRORS:
      return _defaultState;

    default:
      return state;
  }
};

export default ErrorReducer;
