export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_FEEDS = "RECEIVE_FEEDS";
import * as FeedAPIUtil from '../util/feed_api_util';

export const fetchFeed = (feed) => dispatch => (
  FeedAPIUtil.fetchFeed(feed)
    .then(feed => dispatch(receiveFeed(feed)))
);

export const fetchFeeds = () => dispatch => (
  FeedAPIUtil.fetchFeeds()
    .then(feeds => {
      return dispatch(receiveFeeds(feeds));
    })
);

const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

const receiveFeeds = (feeds) => ({
  type: RECEIVE_FEEDS,
  feeds
});
