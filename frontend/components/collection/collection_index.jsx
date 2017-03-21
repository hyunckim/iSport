import React from 'react';
import { hashHistory } from 'react-router';
import CollectionIndexItem from './collection_index_item';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCollections();
    debugger;
  }

  render() {
    debugger;
    let allCollections;
    if (this.props.collections) {
      allCollections = this.props.collections.map(collection => {
        return (
          <li className="collection-index-item" key={collection.id}>
            <CollectionIndexItem collection={ collection } />
          </li>
        );});
      }
    return (
      <div className="collection-container">
        <ul>
          <li>All</li>
          { allCollections }
        </ul>
      </div>
    );
  }
}

export default CollectionIndex;
