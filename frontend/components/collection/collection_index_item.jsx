import React from 'react';
import { hashHistory } from 'react-router';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    let { feeds } = this.props;

    let collection_feed = this.props.collection.feeds.map(id => {
      return (
        <li key={id}>
          { feeds[id].title }
        </li>
      );
    });

    return (
      <div>
        <p>{ this.props.collection.title }</p>
        { collection_feed }
      </div>

    );
  }
}

export default CollectionIndexItem;
