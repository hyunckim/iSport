import React from 'react';
import FeedIndexContainer from '../feed/feed_index_container';
import FeedFormContainer from '../feed/feed_form_container';
import ModalArticle from '../article/modal_article';
import { merge } from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.feeds = [];
    this.state = { feeds: []};
    this.collectArticles = this.collectArticles.bind(this);
  }

  componentDidMount() {
    this.props.fetchCollections();
    if (this.props.collections) {
      this.collectArticles();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.collections && nextProps.collections) {
      this.collectArticles();
    } else if ( this.props.collections !== nextProps.collections) {
      this.collectArticles();
    }
  }

  collectArticles() {
    let { collections } = this.props;
    let subscribedFeeds = [];
    let allArticle = [];
    if (collections.length && this.props.feeds) {
      for (let i = 0; i < collections.length; i++) {
        collections[i].feeds.forEach((feedId, idx) => {
          if (!subscribedFeeds.includes(feedId)) {
            subscribedFeeds.push(feedId);
            $.ajax({
              url: 'https://api.rss2json.com/v1/api.json',
              method: 'GET',
              dataType: 'json',
              data: {
                rss_url: `${this.props.feeds[feedId].url}`,
                api_key: 'n8nh7hfhczjqecbwvjhvvafcfomhdiu9ngcduib4',
                count: 10,
              }
            }).then(res => {
              allArticle = allArticle.concat(merge(res, { feed: { id: feedId }}));
              this.setState({ feeds: allArticle });
              });
          }
        });
      }
    }
  }

  render() {
    let parsedArticles;
    if (this.state.feeds.length && this.props.collections) {
      let articles = [];
      this.state.feeds.forEach(feed => {
        for (let i = 0; i < feed.items.length; i++) {
          articles.push([feed.items[i], feed.feed]);
        }
      });
      articles = articles.sort(function(a, b) {
        let date1 = new Date(a[0].pubDate);
        let date2 = new Date(b[0].pubDate);
        return date1 > date2 ? -1 : date1 < date2 ? 1 : 0;
      });

      parsedArticles = articles.slice(0, 25).map((article, idx) => {
        if (article[0].description.match(/<(.*?)>/)) {
          article[0].description = article[0].description.replace(/<(?:.|\n)*?>/gm, '');
          article[0].content = article[0].content.replace(/<(?:.|\n)*?>/gm, '');
        }
        return (
          <ModalArticle article={ article[0] } feed={ this.props.feeds[article[1].id] } key={ idx } />
        );
      });
    }

    return (
      <div className="feed-detail-container">
        <header className="feed-detail-header">
          <div className="feed-detail-header-divider">
            <h2 className="feed-detail-title">Welcome to iSports</h2>
            <p className="pLatest">LATEST</p>
          </div>
        </header>
        <ul className="article-container">
          { parsedArticles }
        </ul>
      </div>
    );
  }
}

export default Home;
