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
       <div className="welcome-content">
         <h1 className="welcome-message">Welcome to iSport</h1>
         <ModalSession formType={"signin"} />
         <ModalSession formType={"login"} />
       </div>
     </header>
   );
 }
}

export default Splash;
