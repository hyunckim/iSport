import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {

 constructor(props) {
   super(props);
 }

 logoutButton() {
   if ( this.props.currentUser ) {
     return <button onClick={this.props.logout}>Log Out</button>;
   }
 }

 render() {

   const welcomeMessage = this.props.currentUser ? `Welcome ${this.props.currentUser.email}` : "";

   return (
     <div>
       { welcomeMessage }
       { this.logoutButton() }
     </div>
   );
 }
}

export default Navbar;
