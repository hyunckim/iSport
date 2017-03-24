import { connect } from 'react-redux';
import { fetchSports } from '../../actions/sport_actions';
import SportIndex from './sport_index';
import { isEmpty } from 'lodash';

const mapStateToProps = state => {
  let sports = isEmpty(state.sports) ? [] : Object.keys(state.sports).map(id => state.sports[id]);
  return ({
    sports: sports
  });
};
const mapDispatchToProps = dispatch => ({
  fetchSports: () => dispatch(fetchSports())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportIndex);
