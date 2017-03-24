import React from 'react';
import { hashHistory } from 'react-router';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  follow(feed_id) {
    return e => {
      e.preventDefault();
      this.props.subscribe({collection_id: 1, feed_id: feed_id});
    };
  }

  directToDetail(feedId) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(`feed/${feedId}`);
    };
  }

  render() {
    const { feed } = this.props;
    return (
      <div className="feed-item">
        <img src={ feed.image } className="feed-logo" onClick= { this.directToDetail(feed.id) }></img>
        <p className="feed-title" onClick= { this.directToDetail(feed.id) }>{ feed.title }</p>
        <p className="feed-description">{ feed.description }</p>
      </div>
    );
  }
}

export default FeedIndexItem;
