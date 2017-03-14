import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      this.props.processForm(this.state);
    };
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

          <input type="text" placeholder="demo@appacademy.io" value={ this.state.email }></input>
          <input type="password"></input>
          <input type="submit" onClick={ this.handleSubmit } value = { submitContent }></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
