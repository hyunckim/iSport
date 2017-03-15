import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.currentUser),
  errors: (ownProps.fromType === 'signin' ? state.errors.signin : state.errors.login),
  formType: ownProps.formType
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "signin" ? signup : login;

  return {
    processForm: user => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
