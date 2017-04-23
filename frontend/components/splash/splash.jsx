import React from 'react';
import { Link } from 'react-router';
import ModalSession from '../session_form/modal_session';

class Splash extends React.Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <header className="welcome">
       <div className="welcome-container">
       <div className="welcome-content">
         <h1 className="welcome-message">Welcome to iSport</h1>
         <p className="welcome-description">Extraordinary world of sports</p>
         <ModalSession formType={ "signup" } />
         <ModalSession formType={ "login" } />
       </div>
      </div>
     </header>
   );
 }
}

export default Splash;
