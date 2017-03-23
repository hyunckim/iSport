import { connect } from 'react-redux';
import FeedDetail from './feed_detail';
import { fetchFeed } from '../../actions/feed_actions';
import { subscribe, unsubscribe, fetchNewCollection } from '../../actions/collection_actions';

const mapStateToProps = (state, { params }) => {
  return ({
    feed: state.feeds[params.feedId],
    collections: Object.keys(state.collections).map(id => state.collections[id])
  });
};

const mapDispatchToProps = (dispatch, { params }) => ({
  fetchFeed:() => dispatch(fetchFeed(params.feedId)),
  subscribe:(subscription) => dispatch(subscribe(subscription)),
  unsubscribe: (subscription) => dispatch(unsubscribe(subscription)),
  fetchNewCollection: (collection) => dispatch(fetchNewCollection(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedDetail);
