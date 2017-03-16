import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import FeedReducer from './feed_reducer';

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorReducer,
  feeds: FeedReducer
});

export default rootReducer;
