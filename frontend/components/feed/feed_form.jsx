import React from 'react';

class FeedForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text">Title</input>
        <input type="string">Description</input>
        <input type="text">Url</input>
        <input type="text">Image Url</input>
      </div>
    );
  }
}

export default FeedForm;
