import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }

  render() {
    let allFeeds = this.props.feeds.map(feed => {
      return (
        <li className="feed-index-item" key={feed.id}>
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
