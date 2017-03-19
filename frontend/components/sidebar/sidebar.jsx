import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="sidebar-container">
          <h3>Sidebar</h3>
        </div>
      );
    } else {
    return <div></div>;
    }
  }
}

export default Sidebar;
