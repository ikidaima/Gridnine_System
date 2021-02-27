import { KEY_AIRLINES, KEY_PRICE, KEY_STOPS, MAX_PRICE_VALUE } from "../../constants/constants";
import { SET_FILTER_PRICE, SET_FILTER_STOP } from "../../constants/typeOfActions";

const initState = {
  [KEY_STOPS]: [false, false],
  [KEY_PRICE]: {
    min: 0,
    max: 100000
  },
  [KEY_AIRLINES]: []
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

    default:
      return state;
  }
};

export default filterReducer;