import { RECEIVE_COLLECTION, RECEIVE_COLLECTIONS, RECEIVE_NEW_COLLECTION, DELETE_SUBSCRIPTION } from '../actions/collection_actions';
import { merge } from 'lodash';

const CollectionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COLLECTION:
      return merge({}, state, action.collection);
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case DELETE_SUBSCRIPTION:
      let newState = merge({}, state);
      let id = Object.keys(action.collection)[0];
      delete newState[id];
      return merge({}, newState, action.collection);
    default:
      return state;
  }
};

export default CollectionReducer;
