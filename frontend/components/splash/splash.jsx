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
                   <h2>What is iSport?</h2>
                   <p>Introduce the visitor to the business using clear, informative text. Use well-targeted keywords within your sentences to make sure search engines can find the business.</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
               </div>
           </div>

           <hr />

           <div className="row">
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                   <h2>RSS feeds</h2>
                   <p>RSS feeds</p>
               </div>
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                   <h2>Collections</h2>
                   <p>Collections</p>
               </div>
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                   <h2>Sports</h2>
                   <p>Sports</p>
               </div>
           </div>
           <hr />
       </div>
     </div>
   );
 }
}

export default Splash;
