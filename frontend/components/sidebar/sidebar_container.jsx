import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
