import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(attr) {
    return e => {
      this.setState({ [attr]: e.target.value });
    };
  }

  renderErrors() {
    let { errors } = this.props;
    let allErrors = [];
    if (errors.length) {
      return (
        errors.map((error, index) => (
          <li key="index">
            { error }
          </li>
        ))
      );
    }
  }

  render() {
    let submitContent;

    if (this.props.formType === 'login') {
      submitContent = "Log In";
    } else {
      submitContent = "Sign Up";
    }

    return (
      <div>
        <form>
          <h3>iSport</h3>
          { this.renderErrors() }
          <input type="text" onChange={ this.update('email') } placeholder="demo@appacademy.io" value={ this.state.email }></input>
          <input type="password" onChange={ this.update('password') }></input>
          <input type="submit" onClick={ this.handleSubmit } value = { submitContent }></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
