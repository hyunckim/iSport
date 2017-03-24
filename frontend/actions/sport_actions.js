export const RECEIVE_SPORTS = "RECEIVE_SPORTS";
import { receiveFeeds } from './feed_actions';
import * as SportAPIUtil from '../util/sport_api_util';

export const fetchSports = () => dispatch => (
  SportAPIUtil.fetchSports()
    .then(sports => {
      return dispatch(receiveSports(sports));
    })
);

export const fetchSport = (id) => dispatch => (
  SportAPIUtil.fetchSport(id)
    .then(feeds => dispatch(receiveFeeds(feeds)))
);

const receiveSports = (sports) => ({
  type: RECEIVE_SPORTS,
  sports
});
