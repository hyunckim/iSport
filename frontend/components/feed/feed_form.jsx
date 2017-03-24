import React from 'react';
import { hashHistory } from 'react-router';

class FeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", url: "", image: "",
      follow: "FOLLOW", newCollection: "", feedId: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveOver = this.moveOver.bind(this);
    this.moveOut = this.moveOut.bind(this);
    this.createNewCollection = this.createNewCollection.bind(this);
    this.collectionDropdown = this.collectionDropdown.bind(this);
  }

  update(attr) {
    return e => {
      e.preventDefault();
      this.setState({ [attr]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${this.state.url}`})
      .then((res) => {
        let result = res.feed;
        let description;
        if (!result.description) {
          description = "Sports News";
        } else { description = result.description; }
        this.props.fetchNewFeed({title: result.title, description: description, image: result.image, url: result.url  });
        this.setState({title: result.title, description: description, image: result.image });

        this.props.feeds.forEach(feed => {
          if (feed.title === result.title) {
            this.setState({feedId: feed.id});
          }
        });
      });
  }

  collectionDropdown(e) {
    e.preventDefault();
    document.getElementById("newFeedDropDown").classList.toggle("show");
  }

  createNewCollection(e) {
    e.preventDefault();
    let feedId;
    if (!this.state.feedId) {
      feedId =  this.props.feeds.slice(-1)[0].id;
    } else {
      feedId = this.state.feedId;
    }
    this.props.fetchNewCollection({ title: this.state.newCollection, feed_id: feedId });
    this.setState({ newCollection: ""} );
  }

  moveOver(e) {
    e.preventDefault();
    if (e.currentTarget.children[0].classList.contains("fa-check")) {
      e.currentTarget.children[0].classList.remove("fa-check");
      e.currentTarget.children[0].classList.add("fa-times");
    } else if (!e.currentTarget.children[0].classList.contains("fa-check")) {
      e.currentTarget.children[0].classList.add("fa-plus");
    }
  }

  moveOut(e) {
    e.preventDefault();
    if (e.currentTarget.children[0].classList.contains("fa-times")) {
      e.currentTarget.children[0].classList.remove("fa-times");
      e.currentTarget.children[0].classList.add("fa-check");
    } else if (e.currentTarget.children[0].classList.contains("fa-plus")) {
      e.currentTarget.children[0].classList.remove("fa-plus");
    }
  }

  subscribe(collectionId) {
    return e => {
      let feedId;
      if (!this.state.feedId) {
        feedId =  this.props.feeds.slice(-1)[0].id;
      } else {
        feedId = this.state.feedId;
      }
      e.preventDefault();
      if (e.target.children[0].classList.contains("fa-times")) {
        this.props.unsubscribe({
          collection_id: collectionId,
          feed_id: feedId
        });
        e.currentTarget.children[0].classList.remove("fa-times");
        if (!document.getElementsByClassName("fa-check").length) {
          this.setState({ follow: "FOLLOW" });
        }
      } else {
          this.props.subscribe({
            collection_id: collectionId,
            feed_id: feedId
          });
          e.currentTarget.children[0].classList.add("fa-check");
          if (this.state.follow === "FOLLOW") {
            this.setState({ follow: "FOLLOWING"});
          }
        }
    };
  }

  render() {
    let pResult;
    let imageResult = null;
    let titleResult;
    let descriptionResult;
    let followBtn = null;
    let collectionsList;
    if (this.props.collections.length) {
      collectionsList = this.props.collections.map(collection => {
        let cName = "";
        if ( collection.feeds.includes(this.props.feed.id)) {
          cName = "fa-check";
        }

        return (
          <p className="subscription-name" onClick= { this.subscribe(collection.id) }  onMouseOver={ this.moveOver } onMouseOut={ this.moveOut }>
            { collection.title }
            <i className={`fa ${cName} follow-icon`} aria-hidden="true"></i>
          </p>
        );
      });
    }

    if (this.state.title) {
      pResult = "RESULTS";
      imageResult = <img src={ this.state.image } className="feed-result-image" />;
      titleResult = this.state.title;
      descriptionResult = this.state.description;
      followBtn =
        <div className="follow-collection-dropdown">
          <button className="follow-button" onClick={ this.collectionDropdown }>
            <p className="Follow-state">{ this.state.follow }</p>
          </button>
          <div id="newFeedDropDown" className="collection-dropdown">
            { collectionsList }
            <input type="text" placeholder="e.g. Hockey" value={ this.state.newCollection }
              className="new-collection-input" onChange={ this.update('newCollection') }></input>
            <p className="new-collection" onClick={ this.createNewCollection }>
              <i className='fa fa-plus' aria-hidden="true"></i>
              CREATE A COLLECTION
            </p>
          </div>
        </div>;
    }
    return (
      <div>
        <form className="feed-form">
          <p className="new-feed-description">Want to add your own feed to iSport?</p>
          <div className="new-feed-bar">
            <i className="fa fa-search new-feed-icon" aria-hidden="true"></i>
            <input type="text" onChange={ this.update('url') } value={ this.state.url } className="new-feed-url"
              placeholder='Enter RSS feed e.g. http://www.espn.com/espn/rss/news '/>
          </div>
          <button className="search-feed-btn"
            onClick={ this.handleSubmit }>Search Feed</button>

          <div className="search-result-container">
            <p className="pResult">{ pResult }</p>

            <div className="feed-result">
              { imageResult }
              <div className="feed-result-detail">
                <p className="feed-result-title">{ titleResult }</p>
                <p className="feed-result-description">{ descriptionResult }</p>
              </div>
              { followBtn }
            </div>
          </div>
        </form>
      </div>
      );

    }
}

export default FeedForm;
