import React from 'react';
import { hashHistory } from 'react-router';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCollection = this.toggleCollection.bind(this);
  }

  redirectFeed(id) {
    return event => {
      event.preventDefault();
      hashHistory.push(`/feed/${id}`);
    };
  }

  redirectCollection(title) {
    return event => {
      event.preventDefault();
      hashHistory.push(`/collection/${title}`);
    };
  }

  toggleCollection(e) {
    e.preventDefault();
    if (e.currentTarget.className ==="fa fa-angle-right") {
      e.currentTarget.classList.remove("fa-angle-right");
      e.currentTarget.classList.add("fa-angle-down");
      e.target.parentNode.parentElement.childNodes[1].classList.remove("collect-feed-container");
      e.target.parentNode.parentElement.childNodes[1].classList.add("show");
    } else {
      e.currentTarget.classList.remove("fa-angle-down");
      e.currentTarget.classList.add("fa-angle-right");
      e.target.parentNode.parentElement.childNodes[1].classList.remove("show");
      e.target.parentNode.parentElement.childNodes[1].classList.add("collect-feed-container");
    }
  }

  render() {
    let { feeds } = this.props;
    let collection_feed;
    if (feeds) {
      collection_feed = this.props.collection.feeds.map(id => {
        debugger;
        return (
          <li key={ id } className="subscription-feed-container" onClick={ this.redirectFeed(id) }>
            <img src={ feeds[id].image } className="subscription-feed-img"></img>
            <h2 className="subscription-feed">{ feeds[id].title }</h2>
          </li>
        );
      });
    }

    return (
      <div className={`${this.props.collection.title}-container`}>
        <li className="collection-display" key={this.props.collection.id}>
          <i className="fa fa-angle-right" onClick={ this.toggleCollection }aria-hidden="true"></i>
          <p onClick={ this.redirectCollection(this.props.collection.title) }>{ this.props.collection.title }</p>
        </li>
          <ul className="collect-feed-container">
            { collection_feed }
          </ul>
      </div>

    );
  }
}

export default CollectionIndexItem;
