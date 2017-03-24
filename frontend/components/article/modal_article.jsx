import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10,
    boxShadow       : 'rgba(0, 0, 0, 0.498039) 8px 10px 34px 10px'
  },
  content : {
    position: "fixed",
    top: '50%',
    right: '0',
    bottom: 'auto',
    width: '60vw',
    padding: "6rem",
    transform: 'translate(-0%, -50%)'
  }
};

class ModalArticle extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
      Modal.setAppElement('body');
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    render() {
      let { article } = this.props;
      let author = "";

      if ( article.author ) {
        author = `by ${ article.author }`;
      }

      let image = "image";
      let feed = "feed";
      let feedImg = "feed-img";
      let date = "date";
      let feedContainer = 'feed-container';
      if ( !article.enclosure.link ) {
        image = "no-image";
        feedImg = "no-feed-img";
        feed = "no-feed";
        date = "no-date";
        feedContainer = "no-feed-container";
      }

      return (
        <div>
          <li className="article-box" key={article.title} onClick={this.openModal}>
            <img className={`article-${image}`} src={ article.enclosure.link || article.enclosure.thumbnail }></img>
            <div className="article-content-container">
              <p className={`article-title`} >{ article.title }</p>
              <p className={`article-description`} >{ article.description }</p>
              <div className={`article-date-${feedContainer}`}>
                <img src={ this.props.feed.image } className={`article-feed-img`}></img>
                <p className={`article-feed`} >{ this.props.feed.title }</p>
                <p className={`article-date`} >{ article.pubDate }</p>
              </div>
            </div>
          </li>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="article-modal"
          >
          <div className="article-modal-detail">
            <div className="article-modal-header">
              <h1 className="article-modal-title">{ article.title }</h1>
              <p className="article-modal-author">{ author }</p>
              <p className="article-modal-pubDate">published: { article.pubDate }</p>
            </div>
            <img className="article-modal-image" src={ article.enclosure.link || article.enclosure.thumbnail }></img>
            <p className="article-modal-content">{ article.content }</p>
            <a href={`${ article.link }`} className="link-button">Visit Website</a>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default ModalArticle;
