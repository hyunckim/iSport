import React from 'react';
import { hashHistory } from 'react-router';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <p>{ this.props.title }</p>
    );
  }
}

export default CollectionIndexItem;
