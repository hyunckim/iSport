import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchCollections } from '../../actions/collection_actions';
import { fetchSports } from '../../actions/sport_actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCollections:() => dispatch(fetchCollections()),
  fetchSports:() => dispatch(fetchSports())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
