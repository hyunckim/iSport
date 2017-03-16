import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalSession extends React.Component {
  constructor() {
      super();

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
      // references are now sync'd and can be accessed.
      // this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    render() {

      const buttonName = (this.props.formType === 'signup' ? "GET STARTED" : "EXISTING USER");
      const className = (this.props.formType === 'signup' ? "signup-button" : "login-button");
      return (
        <div className="session-buttons">
          <button onClick={this.openModal} className={ className }>{ buttonName }</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <div className="session-logo">
            <span className="session-logo1">i</span><span className="session-logo2">S</span><span className="session-logo3">PORT</span>
          </div>
            <SessionFormContainer formType={ this.props.formType } closeModal={ this.closeModal }/>
          </Modal>
        </div>
      );
    }
  }

export default ModalSession;
