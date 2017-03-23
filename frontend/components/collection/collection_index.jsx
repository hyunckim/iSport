import React from 'react';
import { hashHistory } from 'react-router';
import CollectionIndexItem from './collection_index_item';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.directHome = this.directHome.bind(this);
  }

  componentDidMount() {
    this.props.fetchCollections();
    this.props.fetchFeeds();
  }

  directHome(e) {
    e.preventDefault();
    hashHistory.push("/");
  }

  render() {
    let allCollections;
    if (this.props.collections) {
      allCollections = this.props.collections.map((collection, idx) => {
        return (
            <CollectionIndexItem collection={ collection } feeds={ this.props.feeds } key={ idx } />
        );});
      }
    return (
      <div className="collection-container">
        <ul>
          <li className="collection-display" key={ 100 } onClick={ this.directHome }>
            <i className="fa fa-bars"></i>
              <p>All</p>
          </li>
          { allCollections }
        </ul>
      </div>
    );
  }
}

export default CollectionIndex;
