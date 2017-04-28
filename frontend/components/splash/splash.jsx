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
                   <h2 className="title">What is  <span className="nav-logo1 title">i</span><span className="nav-logo2 title">S</span><span className="nav-logo3 title">PORT</span></h2>
                   <p>iSport is a full-stack web application inspired by Feedly, a RSS feed aggregator. Users can organize and explore feeds related to sports. This application was built using Ruby on Rails on the back-end, PostgreSQL as database, and React/Redux on the front-end.</p>
               </div>
           </div>

           <hr />
           <h2 className="title">Features</h2>

           <div className="row">
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://res.cloudinary.com/dh7hv7kkd/image/upload/v1493361799/Screen_Shot_2017-04-27_at_11.42.54_PM_tijejd.png" alt="" />
                   <h2 className="title">RSS feeds</h2>
                   <p>Enjoy all your favorite feeds in one website!</p>
               </div>
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://res.cloudinary.com/dh7hv7kkd/image/upload/v1493360076/Screen_Shot_2017-04-27_at_11.14.07_PM_sbjllm.png" alt="" />
                   <h2 className="title">Collections</h2>
                   <p>Add your feeds to your collection!</p>
               </div>
               <div className="col-sm-4">
                   <img className="img-circle img-responsive img-center" src="http://res.cloudinary.com/dh7hv7kkd/image/upload/v1493360175/Screen_Shot_2017-04-27_at_11.12.49_PM_rrgqdy.png" alt="" />
                   <h2 className="title">Sports</h2>
                   <p>Explore feeds based on sports!</p>
               </div>
           </div>
           <hr />
       </div>
     </div>
   );
 }
}

export default Splash;
