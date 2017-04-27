import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <div>
       <header className="business-header">
           <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <h1 className="tagline">Welcome to iSport</h1>
                   </div>
               </div>
           </div>
       </header>

       <div className="container bottom">

           <div className="row">
               <div className="col-sm-8">
                   <h2>What is iSport</h2>
                   <p>Introduce the visitor to the business using clear, informative text. Use well-targeted keywords within your sentences to make sure search engines can find the business.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
               </div>
           </div>

           <hr />

           <div className="row">
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                   <h2>RSS feeds</h2>
                   <p>These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold.</p>
               </div>
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                   <h2>Collections</h2>
                   <p>The images are set to be circular and responsive. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
               </div>
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                   <h2>Sports</h2>
                   <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
               </div>
           </div>
           <hr />
       </div>
     </div>
   );
 }
}

export default Splash;
// <header className="welcome">
// <div className="welcome-container">
// <div className="welcome-content">
//   <h1 className="welcome-message">Welcome to iSport</h1>
//   <p className="welcome-description">You are one click away from all your favorite sport feeds</p>
//   <ModalSession formType={ "signup" } />
//   <ModalSession formType={ "login" } />
// </div>
// </div>
// </header>
