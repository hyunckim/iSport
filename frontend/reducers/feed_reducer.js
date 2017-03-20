import { RECEIVE_FEED, RECEIVE_FEEDS, RECEIVE_NEW_FEED } from '../actions/feed_actions';
import { merge } from 'lodash';

const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FEED:
      return merge({}, state, action.feed);
    case RECEIVE_FEEDS:
      return action.feeds;
    case RECEIVE_NEW_FEED:
      return merge({}, state, action.feed);
    default:
      return state;
  }
};

export default FeedReducer;
