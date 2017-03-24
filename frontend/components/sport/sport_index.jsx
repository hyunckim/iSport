import React from 'react';
import { hashHistory } from 'react-router';

class SportIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSports();
  }

  directToSport(id) {
    return (e) => {
      hashHistory.push(`sports/${id}`);
    };
  }

  render() {
    let sports = "THIS SHOULD NOT SHOW UP!! YOU SUCK";
    if (this.props.sports) {
      sports = this.props.sports.map(sport => {
        return (
          <div className="sport-item" onClick={ this.directToSport(sport.id) }>
            <p className="sport-title">{ sport.title }</p>
            <img src="http://www.prepcasts.com/wp-content/uploads/2014/04/BasketballStockImage.jpg" className="sport-image" ></img>
          </div>
        );
      });
    }
    return (
      <div className="sport-container">
        { sports }
      </div>
    );
  }
}

export default SportIndex;
