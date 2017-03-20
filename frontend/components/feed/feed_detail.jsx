import React from 'react';
import ModalArticle from '../article/modal_article';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: ""};
  }

  componentDidMount() {
    this.props.fetchFeed();

    //if (this.props.feed) {
    $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=http://www.nba.com/warriors/rss.xml`})
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
              <ModalArticle article={ article } />
              <li className="article-title">{ article.title }</li>
              <li className="article-description">{ article.description }</li>
              <div className="article-date-feed-container">
                <img src={ this.props.feed.image } className="article-feed-img"></img>
                <li className="article-feed">{ this.props.feed.title }</li>
                <li className="article-date">{ article.pubDate }</li>
              </div>
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
