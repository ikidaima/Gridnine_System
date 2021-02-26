import { combineReducers } from 'redux';

import flightsReducer from './flightsReducer';

const rootReducer = combineReducers({
  flights: flightsReducer,
});

export default rootReducer;