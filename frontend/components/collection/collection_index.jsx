import React from 'react';
import { hashHistory } from 'react-router';
import CollectionIndexItem from './collection_index_item';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    let allCollections;
    if (this.props.collections) {
      allCollections = this.props.collections.map(collection => {
        return (
            <CollectionIndexItem collection={ collection } feeds={ this.props.feeds } />
        );});
      }
    return (
      <div className="collection-container">
        <ul>
          <li className="collection-display">
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
