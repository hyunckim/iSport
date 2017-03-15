import React from 'react';
import { Link } from 'react-router';
import ModalSession from '../session_form/modal_session';

class Splash extends React.Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <div>
       <h1>Welcome to iSport</h1>
       <ModalSession formType={"signin"} />
       <ModalSession formType={"login"} />
     </div>
   );
 }
}

export default Splash;
