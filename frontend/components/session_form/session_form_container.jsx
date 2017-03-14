import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: (ownProps.location.pathname === "/signup" ? 'signup' : 'login')
});


const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === "/signup") {
    return ({
      processForm: (user) => dispatch(signup(user))
    });
  } else {
    return ({
      processForm: (user) => dispatch(login(user))
    });
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
