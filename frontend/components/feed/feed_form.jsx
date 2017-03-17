import React from 'react';
import { hashHistory } from 'react-router';

class FeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", url: "", image: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(attr) {
    return e => {
      e.preventDefault();
      this.setState({ [attr]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchNewFeed(this.state)
      .then(() => hashHistory.push('home'));
  }

  render() {
    return (
      <div>
        <form>
          <label>Title<input type="text" onChange={ this.update('title') } value={ this.state.title } /></label><br />
          <label>Description<input type="text" onChange={ this.update('description') } value={ this.state.description } /></label><br />
          <label>URL<input type="text" onChange={ this.update('url') } value={ this.state.url } /></label><br />
          <label>Image<input type="text" onChange={ this.update('image') } value={ this.state.image } /></label><br />
          <input type="submit" value="Create Feed" onClick={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

export default FeedForm;
