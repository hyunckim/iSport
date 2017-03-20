import React from 'react';
import { hashHistory } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state= { pin: "pin" };
    this.addContent = this.addContent.bind(this);
    this.pinSidebar = this.pinSidebar.bind(this);
  }

  addContent(e) {
    e.preventDefault();
    hashHistory.push(`newfeed`);
  }

  pinSidebar(e) {
    e.preventDefault();
    this.setState({ pin: (this.state.pin === "pin" ? "unpin" : "pin" ) });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="sidebar-container">
          <h3>Sidebar</h3>
          <div className="sidebar-pin">
            <button className={ this.state.pin } onClick={ this.pinSidebar } >{ this.state.pin }</button>
            <input type="checkbox" className="pin-toggle" />
          </div>
          <button className="add-button" onClick={ this.addContent }>
            <i className="fa fa-plus" aria-hidden="true"></i>
            <span className="add-content">ADD CONTENT</span>
          </button>
        </div>
      );
    } else {
    return <div></div>;
    }
  }
}

export default Sidebar;
