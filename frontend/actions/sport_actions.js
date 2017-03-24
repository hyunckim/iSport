export const RECEIVE_SPORTS = "RECEIVE_SPORTS";
import * as SportAPIUtil from '../util/sport_api_util';

export const fetchSports = () => dispatch => (
  SportAPIUtil.fetchSports()
    .then(sports => {
      return dispatch(receiveSports(sports));
    })
);

const receiveSports = (sports) => ({
  type: RECEIVE_SPORTS,
  sports
});
