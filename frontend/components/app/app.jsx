import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';

const App = (props) => {
  return (
  <div className="main-app">
    <div className="sidebar-nav">
      <SidebarContainer />
      <NavbarContainer />
    </div>
    <div className="main-content">
      { props.children }
    </div>
  </div>
  );
};

export default App;
