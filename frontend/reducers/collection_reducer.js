import { RECEIVE_COLLECTION, RECEIVE_COLLECTIONS, RECEIVE_NEW_COLLECTION } from '../actions/collection_actions';
import { merge } from 'lodash';

const CollectionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COLLECTION:
      return merge({}, state, action.collection);
    case RECEIVE_COLLECTIONS:
      return action.collections;
    default:
      return state;
  }
};

export default CollectionReducer;
