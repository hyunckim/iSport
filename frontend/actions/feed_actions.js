export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_FEEDS = "RECEIVE_FEEDS";
export const RECEIVE_NEW_FEED = "RECEIVE_NEW_FEED";
import * as FeedAPIUtil from '../util/feed_api_util';
import { receiveFeedErrors } from './error_actions';

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

export const fetchNewFeed = (feed) => dispatch => (
  FeedAPIUtil.createFeed(feed)
    .then(feed => {
      debugger;
      return dispatch(receiveNewFeed(feed));
    })
    .fail(error => {
      debugger;
      return dispatch(receiveFeedErrors(error.responseJSON));
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

const receiveNewFeed = (feed) => ({
  type: RECEIVE_NEW_FEED,
  feed
});
