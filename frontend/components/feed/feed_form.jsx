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
    let feed;
    $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${this.state.url}`})
      .then((res) => {
        let result = res.feed;
        this.props.fetchNewFeed({title: result.title, description: result.description, image: result.image });
        this.setState({title: result.title, description: result.description, image: result.image });
      });
  }

  render() {
    let pResult;
    let imageResult = null;
    let titleResult;
    let descriptionResult;
    let followBtn = null;

    if (this.state.title) {
      pResult = "RESULTS";
      imageResult = <img src={ this.state.image } className="feed-result-image" />;
      titleResult = this.state.title;
      descriptionResult = this.state.description;
      followBtn = <button className="follow-btn">FOLLOW</button>;
    }
    return (
      <div>
        <form className="feed-form">
          <p className="new-feed-description">Want to add your own feed to iSport?</p>
          <div className="new-feed-bar">
            <i className="fa fa-search new-feed-icon" aria-hidden="true"></i>
            <input type="text" onChange={ this.update('url') } value={ this.state.url } className="new-feed-url"
              placeholder='Enter RSS feed e.g. http://www.espn.com/espn/rss/news '/>
          </div>
          <button className="search-feed-btn"
            onClick={ this.handleSubmit }>Search Feed</button>

          <div className="search-result-container">
            <p className="pResult">{ pResult }</p>

            <div className="feed-result">
              { imageResult }
              <div className="feed-result-detail">
                <p className="feed-result-title">{ titleResult }</p>
                <p className="feed-result-description">{ descriptionResult }</p>
              </div>
              { followBtn }
            </div>
          </div>
        </form>
      </div>
      );

    }
}

export default FeedForm;
