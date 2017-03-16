export const RECEIVE_FEED = "RECEIVE_FEED";
import * as FeedAPIUtil from '../util/feed_api_util';

export const fetchFeed = (feed) => dispatch => (
  FeedAPIUtil.fetchFeed(feed)
    .then((feed) => dispatch(receiveFeed(feed)))
);

const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});
