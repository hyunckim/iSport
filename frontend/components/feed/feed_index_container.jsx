import { connect } from 'react-redux';
import { fetchFeeds } from '../../actions/feed_actions';
import FeedIndex from './feed_index';

const mapStateToProps = state => ({
  feeds: Object.keys(state.feeds).map(id => state.feeds[id])
});

const mapDispatchToProps = dispatch => ({
  fetchFeeds:() => dispatch(fetchFeeds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
