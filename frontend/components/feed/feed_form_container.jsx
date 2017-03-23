import { connect } from 'react-redux';
import { fetchFeed, fetchFeeds, fetchNewFeed } from '../../actions/feed_actions';
import { subscribe, unsubscribe, fetchNewCollection } from '../../actions/collection_actions';
import FeedForm from './feed_form';

const mapStateToProps = state => ({
  errors: state.errors.feed,
  feeds: Object.keys(state.feeds).map(id => state.feeds[id]),
  collections: Object.keys(state.collections).map(id => state.collections[id])
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: feed => dispatch(fetchFeed(feed)),
  fetchNewFeed: feed => dispatch(fetchNewFeed(feed)),
  subscribe:(subscription) => dispatch(subscribe(subscription)),
  unsubscribe: (subscription) => dispatch(unsubscribe(subscription)),
  fetchNewCollection: (collection) => dispatch(fetchNewCollection(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedForm);
