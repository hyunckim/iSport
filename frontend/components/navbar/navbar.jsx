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
     <div className="navbar">
       <div className="center-container">
         <p>iSport</p>
         { this.logoutButton() }
         <div className="search-bar">
           <i className="fa fa-search" aria-hidden="true"></i>
           <input className="search-input" placeholder="Search"></input>
          </div>
        </div>
     </div>
   );
 }
}

export default Navbar;
