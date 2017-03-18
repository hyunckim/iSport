import React from 'react';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: ""};
  }

  componentDidMount() {
    this.props.fetchFeed();

    if (this.props.feed) {
    $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`})
      .then((res) => this.setState({ response: res.items }));
    }
  }

  render() {
    let parsedArticles;
    if (this.state.response) {
      let articles = this.state.response;
      if (articles) {
        parsedArticles = articles.map(article => {
          return (<li>
            <ul>
              <li>{ article.title }</li>
              <li>{ article.description }</li>
            </ul>
          </li>);
        });
      }
    } else {
      parsedArticles = "";
    }
    return <ul>
      { parsedArticles }
    </ul>;
  }
}

export default FeedDetail;
