import { connect } from 'react-redux';
import { fetchSports } from '../../actions/sport_actions';
import SportIndex from './sport_index';

const mapStateToProps = state => ({
  sports: Object.keys(state.sports).map(id => state.sports[id])
});

const mapDispatchToProps = dispatch => ({
  fetchSports: () => dispatch(fetchSports())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportIndex);
