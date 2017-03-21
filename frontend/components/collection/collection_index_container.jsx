import { connect } from 'react-redux';
import { fetchCollections } from '../../actions/collection_actions';
import CollectionIndex from './collection_index';

const mapStateToProps = state => ({
  collections: Object.keys(state.collections).map(id => state.collections[id]),
  feeds: state.feeds
});

const mapDispatchToProps = dispatch => ({
  fetchCollections:() => dispatch(fetchCollections())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionIndex);
