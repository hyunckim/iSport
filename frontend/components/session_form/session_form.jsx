import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ email: "", password: ""});
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

  demologin() {
    if (!this.state.loggedIn) {
      return (
        <button className="session-submit-button demo" onClick={() => this.props.login({email: "test", password: "123456"}) }>Demo</button>
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

    const message = this.props.formType === 'login' ? "Welcome Back" : "Create an Account";
    return (
      <div>
        <form className="session-form">

          <p className={`sign-message`}>{ message }</p>

          <ul className="error">
            { this.renderErrors() }
          </ul>
          <label className="email-text">Email</label>
          <input type="text" className="session-input-box" onChange={ this.update('email') }
            placeholder="Enter email" value={ this.state.email } ></input>

          <label className="password-text">Password</label>
          <input type="password" className="session-input-box" onChange={ this.update('password') }
            placeholder="Enter password" value={ this.state.password }></input>

          { this.demologin() }

          <input type="submit" className="session-submit-button" onClick={ this.handleSubmit } value = { submitContent }></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
