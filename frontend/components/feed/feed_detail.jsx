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
    } else if ( this.props.feed.id != nextProps.feed.id) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${nextProps.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
    }
  }

  render() {
    let parsedArticles="";
    let feedTitle="";
    let buttonContent = "FOLLOW";

    if (this.props.collections.length) {
      let { feed } = this.props;
      this.props.collections.forEach(collection => {
        if (collection.feeds.includes(feed.id)) {
          buttonContent = "FOLLOWING";
        }
      });
    }

    if (Object.keys(this.state.response).length) {
      let articles = this.state.response;
      if (articles) {
        feedTitle = this.props.feed.title;
        parsedArticles = articles.map((article, idx) => {
          return (
            <li className="article-box" key={idx} >
              <ModalArticle article={ article } />
              <div className="article-content-container">
                <p className="article-title" >{ article.title }</p>
                <p className="article-description" >{ article.description }</p>
                <div className="article-date-feed-container">
                  <img src={ this.props.feed.image } className="article-feed-img"></img>
                  <p className="article-feed" >{ feedTitle }</p>
                  <p className="article-date" >{ article.pubDate }</p>
                </div>
              </div>
          </li>);
        });
      }
    }
    return (
      <div className="feed-detail-container">
        <header className="feed-detail-header">
          <div className="feed-detail-header-divider">
            <h2 className="feed-detail-title">{ feedTitle }</h2>
            <p className="pLatest">LATEST</p>
          </div>
          <button className="follow-button">{ buttonContent }</button>
        </header>
        <ul className= "article-container">
          { parsedArticles }
        </ul>
      </div>
    );
  }
}

export default FeedDetail;
