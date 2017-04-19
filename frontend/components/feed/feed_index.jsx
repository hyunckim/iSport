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
    let allFeeds = "";
    let sportTitle = "";
    if (this.props.feeds) {
      sportTitle = this.props.sportTitle;
      allFeeds = this.props.feeds.map((feed, idx) => {
        return (
            <FeedIndexItem feed={ feed } subscribe={ subscribe } key={ idx }/>
        );
      });
    }
    return (
      <div className="feed-index-container">
        <h2 className="sport-detail-title">{ sportTitle }</h2>
        <div className="feed-index">
          { allFeeds }
        </div>
      </div>
    );
  }
}

export default FeedIndex;
