import { combineReducers } from 'redux';
import filterReducer from './filterReducer';

import flightsReducer from './flightsReducer';
import typeOfSortReducer from './typeOfSortReducer';

const rootReducer = combineReducers({
  flights: flightsReducer,
  typeOfSort: typeOfSortReducer,
  filter: filterReducer,
});

export default rootReducer;