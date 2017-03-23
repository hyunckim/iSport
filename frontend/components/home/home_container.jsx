import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  collections: Object.keys(state.collections).map(id => state.collections[id]),
  feeds: state.feeds
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
