import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.currentUser),
  errors: (ownProps.formType === 'signup' ? state.errors.signup : state.errors.login),
  formType: ownProps.formType
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "signup" ? signup : login;

  return {
    processForm: user => dispatch(action(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
