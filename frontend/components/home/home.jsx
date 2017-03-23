import React from 'react';
import FeedIndexContainer from '../feed/feed_index_container';
import FeedFormContainer from '../feed/feed_form_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: []};
    this.collectArticles = this.collectArticles.bind(this);
  }

  collectArticles() {
    let { collections } = this.props;
    let subscribedFeeds = [];
    let allArticleItems = [];
    if (collections.length) {
      for (let i = 0; i < collections.length; i++) {
        subscribedFeeds = subscribedFeeds.concat(collections[i].feeds);
        collections[i].feeds.forEach((feedId, idx) => {
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
            allArticleItems = allArticleItems.concat(res.items);
            this.setState({ articles: allArticleItems });
          });
        });
      }
    }
    return allArticleItems;
  }

  render() {
    return (
      <div className="home-container">

      </div>
    );
  }
}

export default Home;
