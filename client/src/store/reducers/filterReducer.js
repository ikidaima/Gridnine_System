import { KEY_AIRLINES, KEY_PRICE, KEY_STOPS, MAX_PRICE_VALUE } from "../../constants/constants";
import { INIT_FILTER_AIRLINES, SET_FILTER_AIRLINE, SET_FILTER_PRICE, SET_FILTER_STOP, TOGGLE_FILTER_AIRLINE_DISABLED } from "../../constants/typeOfActions";
import getAirlinesBestPrice from "../../lib/getAirlinesBestPrice";

const initState = {
  [KEY_STOPS]: [true, true],
  [KEY_PRICE]: {
    min: 0,
    max: MAX_PRICE_VALUE
  },
  [KEY_AIRLINES]: {}
};

const filterReducer = (state = initState, action) => {
  const newStateAirlines = {
    ...state[KEY_AIRLINES]
  };
  const stopsIsChanged = [ ...state[KEY_STOPS] ];

  switch (action.type) {
    case INIT_FILTER_AIRLINES:
      return {
        ...state,
        [KEY_AIRLINES]: getAirlinesBestPrice(action.payload)
      }
    
    case SET_FILTER_STOP:
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
      newStateAirlines[action.payload.airline]['checked'] = action.payload.isChecked;

      return {
        ...state,
        [KEY_AIRLINES]: newStateAirlines
      }

    case TOGGLE_FILTER_AIRLINE_DISABLED:
      return {
        ...state,
        [KEY_AIRLINES]: action.payload
      }

    default:
      return state;
  }
};

export default filterReducer;