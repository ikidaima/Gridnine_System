import { KEY_AIRLINES, KEY_PRICE, KEY_STOPS, MAX_PRICE_VALUE } from "../../constants/constants";
import { SET_FILTER_AIRLINE, SET_FILTER_PRICE, SET_FILTER_STOP } from "../../constants/typeOfActions";

const initState = {
  [KEY_STOPS]: [false, false],
  [KEY_PRICE]: {
    min: 0,
    max: MAX_PRICE_VALUE
  },
  [KEY_AIRLINES]: new Set()
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER_STOP:
      const stopsIsChanged = [ ...state[KEY_STOPS] ];

      stopsIsChanged[action.payload.numberOfStop] = action.payload.isChecked;

      return {
        ...state,
        [KEY_STOPS]: stopsIsChanged
      }

    case SET_FILTER_PRICE:
      const priceValue = action.payload.value > MAX_PRICE_VALUE ? MAX_PRICE_VALUE : action.payload.value;
      const newState = {
        ...state,
        [KEY_PRICE]: {
          ...state[KEY_PRICE],
          [action.payload.extremum]: priceValue
        }
      }

      if ( newState[KEY_PRICE]['max'] < newState[KEY_PRICE]['min'] ) {
        newState[KEY_PRICE]['max'] = newState[KEY_PRICE]['min'];
      }
      return newState;

    case SET_FILTER_AIRLINE:
      const airlines = new Set( state[KEY_AIRLINES] );

      if ( action.payload.isChecked ) {
        airlines.add(action.payload.airline);
      } else {
        airlines.delete(action.payload.airline);
      }
      return {
        ...state,
        [KEY_AIRLINES]: airlines
      }

    default:
      return state;
  }
};

export default filterReducer;