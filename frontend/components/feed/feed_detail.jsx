import React from 'react';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: ""};
  }

  componentDidMount() {
    this.props.fetchFeed();

    //if (this.props.feed) {
    $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=http://www.espn.com/espn/rss/news`})
      .then((res) => this.setState({ response: res.items }));
    //}
  }

  render() {
    let parsedArticles;
    if (this.state.response) {
      let articles = this.state.response;
      if (articles) {
        parsedArticles = articles.map(article => {
          return (<li className="article-box">
            <ul>
              <img src={ article.enclosure.link } className="article-image"></img>
              <li className="article-title">{ article.title }</li>
              <li className="article-description">{ article.description }</li>
            </ul>
          </li>);
        });
      }
    } else {
      parsedArticles = "";
    }
    return <ul className= "article-container">
      { parsedArticles }
    </ul>;
  }
}

export default FeedDetail;
