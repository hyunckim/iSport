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
    boxShadow       : 'rgba(0, 0, 0, 0.498039) 8px 10px 34px'
  },
  content : {
    position: "fixed",
    top: '0',
    left: 'auto',
    right: '0',
    bottom: '0',
    width: '70vw',
    borderLeft: "1px solid gray",
    padding: "6rem",
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
      return (
        <div>
          <img onClick={this.openModal} className="article-image" src={article.enclosure.link}></img>
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
            <img className="article-modal-image" src={ article.enclosure.link }></img>
            <p className="article-modal-content">{ article.content }</p>
            <a href={`${ article.link }`} className="link-button">Visit Website</a>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default ModalArticle;