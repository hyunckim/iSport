import React from 'react';
import FeedIndexContainer from '../feed/feed_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <FeedIndexContainer />
        { this.props.children }
      </div>
    );
  }
}

export default Home;
