import React from 'react';
import ModalArticle from '../article/modal_article';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: {}, follow: "FOLLOW"};
    this.collectionDropdown = this.collectionDropdown.bind(this);
    this.changeFollowText = this.changeFollowText.bind(this);
    this.removeToggle = this.removeToggle.bind(this);
    this.moveOver = this.moveOver.bind(this);
    this.moveOut = this.moveOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed();

    if (this.props.feed) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
      this.props.collections.forEach(collection => {
        if (collection.feeds.includes(this.props.feed.id)) {
          this.setState({ follow: "FOLLOWING" });
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.feed && nextProps.feed) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${nextProps.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
    } else if ( this.props.feed.id != nextProps.feed.id) {
      $.ajax({url: `https://api.rss2json.com/v1/api.json?rss_url=${nextProps.feed.url}`})
        .then((res) => this.setState({ response: res.items }));
    }
    this.props.collections.forEach(collection => {
      if (collection.feeds.includes(this.props.feed.id)) {
        this.setState({ follow: "FOLLOWING" });
      }
    });
  }

  collectionDropdown(e) {
    e.preventDefault();
    document.getElementById("myDropdown").classList.toggle("show");
  }

  subscribe(collectionId) {
    return e => {
      e.preventDefault();
      if (e.target.children[0].classList.contains("fa-times")) {
        this.props.unsubscribe({
          collection_id: collectionId,
          feed_id: this.props.feed.id
        });
        if (!document.getElementsByClassName("fa-check").length) {
          this.setState({ follow: "FOLLOW" });
        }
      } else {
          this.props.subscribe({
            collection_id: collectionId,
            feed_id: this.props.feed.id
          });
          if (this.state.follow === "FOLLOW") {
            this.setState({ follow: "FOLLOWING"});
          }
        }
    };
  }

  changeFollowText(e) {
    e.preventDefault();
    if ( this.state.follow === "FOLLOWING" ) {
      this.setState({ follow: "EDIT"});
    } else if( this.state.follow === "EDIT" ) {
      this.setState({ follow: "FOLLOWING" });
    }
  }

  removeToggle(e) {
    e.preventDefault();
    if (!e.target.matches('.Follow-state') && !e.target.parentElement.parentElement.matches('.collection-dropdown')) {
      let dropdowns = document.getElementsByClassName("collection-dropdown");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
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

  render() {
    let parsedArticles="";
    let feed="";
    let collectionsList = "";
    if (this.props.collections.length) {
      collectionsList = this.props.collections.map(collection => {
        let cName = "";
        if ( collection.feeds.includes(this.props.feed.id)) {
          cName = "fa-check";
        }

        return (
          <p onClick={ this.subscribe(collection.id) } onMouseOver={ this.moveOver } onMouseOut={ this.moveOut } className="subscription-name">
            { collection.title }
            <i className={`fa ${cName} follow-icon`} aria-hidden="true"></i>
          </p>
        );
      });
    }

    if (Object.keys(this.state.response).length) {
      let articles = this.state.response;
      if (articles) {
        feed = this.props.feed;
        parsedArticles = articles.map((article, idx) => {
          return (
              <ModalArticle article={ article } feed={ feed }/>
            );
          }
        );
      }
    }
    return (
      <div className="feed-detail-container" onClick={ this.removeToggle }>
        <header className="feed-detail-header">
          <div className="feed-detail-header-divider">
            <h2 className="feed-detail-title">{ feed.title }</h2>
            <p className="pLatest">LATEST</p>
          </div>
          <div className="follow-collection-dropdown">
            <button className="follow-button" onClick={ this.collectionDropdown } onMouseOver={ this.changeFollowText } onMouseOut={ this.changeFollowText }>
              <p className="Follow-state">{ this.state.follow }</p>
            </button>
            <div id="myDropdown" className="collection-dropdown">
              { collectionsList }
            </div>
          </div>
        </header>
        <ul className= "article-container">
          { parsedArticles }
        </ul>
      </div>
    );
  }
}

export default FeedDetail;
