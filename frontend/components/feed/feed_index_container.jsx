import { connect } from 'react-redux';
import { fetchFeed, fetchFeeds } from '../../actions/feed_actions';
import FeedIndex from './feed_index';

const mapStateToProps = state => ({
  feeds: Object.keys(state.feeds).map(id => state.feeds[id])
});

const mapDispatchToProps = dispatch => ({
  fetchFeed:(feed) => dispatch(fetchFeed(feed)),
  fetchFeeds:() => dispatch(fetchFeeds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
