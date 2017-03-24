import { RECEIVE_SPORTS } from '../actions/sport_actions';
import { merge } from 'lodash';

const _defaultState =  {} ;

const SportsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPORTS:
      return action.sports;
    default:
      return state;
  }
};

export default SportsReducer;
