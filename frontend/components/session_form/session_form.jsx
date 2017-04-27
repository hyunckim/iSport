import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", submitContent: "", message: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ email: "", password: ""});
  }

  componentDidMount() {
    if (this.props.formType === 'login') {
      this.setState({ submitContent: "Log In", message: "Welcome back!"});
    } else {
      this.setState({ submitContent: "Sign Up", message: "Create Account"});
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.clearErrors())
      .then(() => this.props.router.replace('home'));
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
          <li key={index}>
            <p>{ error }</p><br />
          </li>
        ))
      );
    }
  }

  demoLogin(e) {
    e.preventDefault();
    let demoLogin = "demo@iSport.com".split('');
    let demoPassword = "password123".split('');
    this.setState({email: "", password: "", submitContent: "Log In", message: "Signing In"});
    let i = 0;
    let interval = setInterval(() => {
      i += 1;
      if (demoLogin.length) {
        if (i % 12 === 0) {
          this.setState({ email: this.state.email + demoLogin.shift(), message: "Signing In" });
        } else if (i % 3 === 0 ){
          this.setState({ email: this.state.email + demoLogin.shift(), message: this.state.message + "." });
        } else {
          this.setState({ email: this.state.email + demoLogin.shift() });
        }
      } else if (demoPassword.length) {
        if (i % 12 === 0) {
          this.setState({ password: this.state.password+demoPassword.shift(), message: "Signing In"});
        } else if (i % 3 === 0 ){
          this.setState({ password: this.state.password+demoPassword.shift(), message: this.state.message + "."});
        } else {
          this.setState({ password: this.state.password+demoPassword.shift() });
        }
      } else {
        clearInterval(interval);
        this.props.login(this.state)
        .then(() => this.props.router.replace('home'));
      }
    }, 80);
  }

  render() {
    return (
      <div>
        <form className="session-form">

          <p className={`sign-message`}>{ this.state.message }</p>

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

          <input type="submit" className="session-submit-button" onClick={ this.handleSubmit }
            value = { this.state.submitContent }></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
