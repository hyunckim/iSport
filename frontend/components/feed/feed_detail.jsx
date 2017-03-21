import React from 'react';
import ModalArticle from '../article/modal_article';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: {}};
  }

  componentDidMount() {
    this.props.fetchFeed();

    if (this.props.feed) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.feed && nextProps.feed) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${nextProps.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
    }
  }

  render() {
    let parsedArticles="";
    let feedTitle="";
    if (Object.keys(this.state.response).length) {
      let articles = this.state.response;
      if (articles) {
        feedTitle = this.props.feed.title;
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
    }
    return (
      <div className="feed-detail-container">
        <header className="feed-detail-header">
          <h2 className="feed-detail-title">{ feedTitle }</h2>
          <p className="pLatest">LATEST</p>
        </header>
        <ul className= "article-container">
          { parsedArticles }
        </ul>
      </div>
    );
  }
}

export default FeedDetail;
