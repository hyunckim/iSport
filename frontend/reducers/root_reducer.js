import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import FeedReducer from './feed_reducer';
import CollectionReducer from './collection_reducer';
import SportReducer from './sport_reducer';

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorReducer,
  feeds: FeedReducer,
  collections: CollectionReducer,
  sports: SportReducer
});

export default rootReducer;
