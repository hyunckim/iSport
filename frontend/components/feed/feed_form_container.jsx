import { connect } from 'react-redux';
import { fetchFeed, fetchFeeds, fetchNewFeed } from '../../actions/feed_actions';
import FeedForm from './feed_form';

const mapStateToProps = state => ({
  errors: state.errors.feed,
  collections: Object.keys(state.collections).map(id => state.collections[id])
});

const mapDispatchToProps = dispatch => ({
  fetchNewFeed: feed => dispatch(fetchNewFeed(feed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedForm);
