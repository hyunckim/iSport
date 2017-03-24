import React from 'react';
import { Link, withRouter } from 'react-router';

class Navbar extends React.Component {

 constructor(props) {
   super(props);
   this.handleLogOut = this.handleLogOut.bind(this);
   this.directHome = this.directHome.bind(this);
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

 directHome(e) {
   e.preventDefault();
   this.props.router.replace('home');
 }

 render() {

   const welcomeMessage = this.props.currentUser ? `Welcome ${this.props.currentUser.email}` : "";

   return (
     <div className="navbar">
       <div className="center-container">
         <div className="nav-logo" onClick={ this.directHome }>
           <span className="nav-logo1">i</span><span className="nav-logo2">S</span><span className="nav-logo3">PORT</span>
         </div>
         { this.logoutButton() }
        </div>
     </div>
   );
 }
}

export default withRouter(Navbar);
