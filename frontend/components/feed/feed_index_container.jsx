import { connect } from 'react-redux';
import { fetchFeeds } from '../../actions/feed_actions';
import { fetchSports } from '../../actions/sport_actions';
import { subscribe } from '../../actions/collection_actions';
import FeedIndex from './feed_index';

const mapStateToProps = (state, { params }) => {
  let feeds = "";
  if (state.sports[params.sportId]) {
    feeds = state.sports[params.sportId].feeds;
  }
  return ({
    feeds: feeds
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchSports:() => dispatch(fetchSports()),
  fetchFeeds:() => dispatch(fetchFeeds()),
  subscribe:(subscription) => dispatch(subscribe(subscription))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
