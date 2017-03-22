import { connect } from 'react-redux';
import FeedDetail from './feed_detail';
import { fetchFeed } from '../../actions/feed_actions';

const mapStateToProps = (state, { params }) => {
  return ({
    feed: state.feeds[params.feedId],
    collections: Object.keys(state.collections).map(id => state.collections[id])
  });
};

const mapDispatchToProps = (dispatch, { params }) => ({
  fetchFeed:() => dispatch(fetchFeed(params.feedId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedDetail);
