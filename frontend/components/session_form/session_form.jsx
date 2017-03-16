import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    let demoLogin = "demo@iSport.com".split('');
    let demoPassword = "password123".split('');
    this.setState({email: "", password: ""});
    let that = this;
    let interval = setInterval(() => {
      if (demoLogin.length) {
        this.setState({ email: this.state.email + demoLogin.shift() });
      } else if (demoPassword.length) {
        this.setState({ password: this.state.password+demoPassword.shift()});
      } else {
        clearInterval(interval);
        this.props.login(this.state);
      }
    }, 80);
  }

  redirect() {
    if (this.props.formType === 'login') {
      return (
        <div>
          <p>Don't have an account? </p>
          <link></link>
        </div>
      );
    } else {

    }
  }

  render() {
    let submitContent;

    if (this.props.formType === 'login') {
      submitContent = "Log In";
    } else {
      submitContent = "Sign Up";
    }

    const message = this.props.formType === 'login' ? "Sign In" : "Create Account";
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

          <div className="demo">
            <p>Log in as a <a className="demo-login" onClick={ this.demoLogin }>guest</a></p>
          </div>
          
          <input type="submit" className="session-submit-button" onClick={ this.handleSubmit } value = { submitContent }></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
