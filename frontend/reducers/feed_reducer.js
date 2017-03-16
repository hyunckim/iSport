import { RECEIVE_FEED, RECEIVE_FEEDS } from '../actions/feed_actions';
import { merge } from 'lodash';

const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FEED:
      return action.feed;
    case RECEIVE_FEEDS:
      return action.feeds;
    default:
      return state;
  }
};

export default FeedReducer;
