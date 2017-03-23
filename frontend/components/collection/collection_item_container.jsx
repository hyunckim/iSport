import { connect } from 'react-redux';
import { fetchCollections } from '../../actions/collection_actions';
import { fetchFeeds } from '../../actions/feed_actions';
import CollectionItem from './collection_item';

const mapStateToProps = (state, ownProps) => {
  let collections = Object.keys(state.collections).map(id => state.collections[id]);
  let collection;
  for (let i = 0; i < collections.length; i++) {
    if (collections[i].title === ownProps.params.collectionTitle) {
      collection = collections[i];
    }
  }
 return ({
   collection: collection,
   feeds: state.feeds
  });
};
const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
