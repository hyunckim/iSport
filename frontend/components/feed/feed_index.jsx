import React from 'react';
import FeedIndexItem from './feed_index_item';
import { hashHistory } from 'react-router';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSports();
  }

  directToDetail(feed) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(`feed/${feed.id}`);
    };
  }

  render() {
    let subscribe = this.props.subscribe;
    let allFeeds = "WHY YOU SUCK SO MUCH!";
    if (this.props.feeds) {
      allFeeds = this.props.feeds.map(feed => {
        return (
          <li className="feed-index-item" key={feed.id}>
            <FeedIndexItem feed={ feed } subscribe={ subscribe }/>
          </li>
        );
      });
    }
    return (
      <div className="feed-container">
        { allFeeds }
      </div>
    );
  }
}

export default FeedIndex;
