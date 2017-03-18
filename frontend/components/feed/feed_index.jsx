import React from 'react';
import FeedIndexItem from './feed_index_item';
import { hashHistory } from 'react-router';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }

  directToDetail(feed) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(`feed/${feed.id}`);
    };
  }

  render() {
    let allFeeds = this.props.feeds.map(feed => {
      return (
        <li className="feed-index-item" key={feed.id} onClick= { this.directToDetail(feed) }>
          <FeedIndexItem feed={ feed } />
        </li>
      );
    });
    return (
      <div className="feed-container">
        { allFeeds }
      </div>
    );
  }
}

export default FeedIndex;
