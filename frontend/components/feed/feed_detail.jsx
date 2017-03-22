import React from 'react';
import ModalArticle from '../article/modal_article';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: {}, follow: "FOLLOW"};
    this.collectionDropdown = this.collectionDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed();

    if (this.props.feed) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
      this.props.collections.forEach(collection => {
        if (collection.feeds.includes(this.props.feed.id)) {
          this.setState({ follow: "FOLLOWING" });
        }
      });
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
    this.props.collections.forEach(collection => {
      if (collection.feeds.includes(this.props.feed.id)) {
        this.setState({ follow: "FOLLOWING" });
      }
    });
  }

  collectionDropdown(e) {
    e.preventDefault();
    if (this.state.follow === "FOLLOW") {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    else { //delete the subscription
    }
  }

  subscribe(collectionId) {
    return e => {
      e.preventDefault();
      this.props.subscribe({
        collection_id: collectionId,
        feed_id: this.props.feed.id
      });
    };
  }

  render() {
    let parsedArticles="";
    let feed="";
    let collectionsList = "";

    if (this.props.collections.length) {
      collectionsList = this.props.collections.map(collection => {
        return (
          <p onClick={ this.subscribe(collection.id) }>
            { collection.title }
          </p>
        );
      });
    }

    if (Object.keys(this.state.response).length) {
      let articles = this.state.response;
      if (articles) {
        feed = this.props.feed;
        parsedArticles = articles.map((article, idx) => {
          return (
              <ModalArticle article={ article } feed={ feed }/>
            );
          }
        );
      }
    }
    return (
      <div className="feed-detail-container">
        <header className="feed-detail-header">
          <div className="feed-detail-header-divider">
            <h2 className="feed-detail-title">{ feed.title }</h2>
            <p className="pLatest">LATEST</p>
          </div>
          <div className="follow-collection-dropdown">
            <button className="follow-button" onClick={ this.collectionDropdown }>{ this.state.follow }</button>
            <div id="myDropdown" className="collection-dropdown">
              { collectionsList }
            </div>
          </div>
        </header>
        <ul className= "article-container">
          { parsedArticles }
        </ul>
      </div>
    );
  }
}

export default FeedDetail;
