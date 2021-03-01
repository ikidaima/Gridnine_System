import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import flightsIsFilteredReducer from './flightsIsFilteredReducer';
import flightsReducer from './flightsReducer';
import isLoadingListReducer from './isLoadingListReducer';
import typeOfSortReducer from './typeOfSortReducer';

const rootReducer = combineReducers({
  flights: flightsReducer,
  typeOfSort: typeOfSortReducer,
  filter: filterReducer,
  flightsIsFiltered: flightsIsFilteredReducer,
  isLoadingList: isLoadingListReducer,
});

export default rootReducer;