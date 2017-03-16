import React from 'react';
import { Link, withRouter } from 'react-router';

class Navbar extends React.Component {

 constructor(props) {
   super(props);
   this.handleLogOut = this.handleLogOut.bind(this);
 }

 handleLogOut(e) {
   e.preventDefault();
   this.props.logout()
    .then(() => this.props.router.replace('/'));
 }

 logoutButton() {
   if ( this.props.currentUser ) {
     return <button onClick={ this.handleLogOut }>Log Out</button>;
   }
 }

 render() {

   const welcomeMessage = this.props.currentUser ? `Welcome ${this.props.currentUser.email}` : "";

   return (
     <div className="navbar">
       <div className="center-container">
         <div className="nav-logo">
           <span className="nav-logo1">i</span><span className="nav-logo2">S</span><span className="nav-logo3">PORT</span>
         </div>
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

export default withRouter(Navbar);
