import { FILTER_FLIGHTS, SORT_FLIGHTS } from "../../constants/typeOfActions";
import filterFlights from "../../lib/filterFlights";
import sortFunction from "../../lib/sortFunction";

const initState = [];

const flightsIsFilteredReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_FLIGHTS:
      return filterFlights(action.payload.flights, action.payload.filter);

    case SORT_FLIGHTS:
      const sortFunc = sortFunction(action.payload);
      const newState = [...state];

      newState.sort((a, b) => sortFunc(a, b));
      return newState;

    default:
      return state;
  }
};

export default flightsIsFilteredReducer;