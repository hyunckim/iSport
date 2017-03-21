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
        <li key={id} className="subscription-feed-container">
          <img src={ feeds[id].image } className="subscription-feed-img"></img>
          <h2 className="subscription-feed">{ feeds[id].title }</h2>
        </li>
      );
    });

    return (
      <div>
        <li className="collection-display">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <p>{ this.props.collection.title }</p>
        </li>
          <ul>
            { collection_feed }
          </ul>
      </div>

    );
  }
}

export default CollectionIndexItem;
