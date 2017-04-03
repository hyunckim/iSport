import React from 'react';
import { hashHistory } from 'react-router';
import CollectionIndexContainer from '../collection/collection_index_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state= { pin: "pin" };
    this.addContent = this.addContent.bind(this);
    this.pinSidebar = this.pinSidebar.bind(this);
  }

  componentDidMount() {
    this.props.fetchCollections();
    this.props.fetchSports();
  }

  addContent(e) {
    e.preventDefault();
    hashHistory.push(`newfeed`);
  }

  redirectSports(e) {
    e.preventDefault();
    hashHistory.push('/sports');
  }

  pinSidebar(e) {
    e.preventDefault();
    this.setState({ pin: (this.state.pin === "pin" ? "unpin" : "pin" ) });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="sidebar-container">
          <button className="discover-button" onClick={ this.redirectSports }>Explore Feeds</button>
          <div className= "all-gear-container">
            <p className="collection-header">Your Collections</p>
          </div>
          <CollectionIndexContainer />
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
