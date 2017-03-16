import React from 'react';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { feed } = this.props;
    return (
      <div className="feed-item">
        { feed.title }
        <img src={ feed.image } className="feed-logo"></img>
      </div>
    );
  }
}

export default FeedIndexItem;
