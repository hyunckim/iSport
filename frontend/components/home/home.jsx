import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home-container">
        <SidebarContainer />
      </div>
    );
  }
}

export default Home;
