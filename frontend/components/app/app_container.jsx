import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
