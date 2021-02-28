import { GET_FLIGHT, SORT_FLIGHTS } from "../../constants/typeOfActions";
import sortFunction from "../../lib/sortFunction";

const initState = {};

const flightsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FLIGHT:
      return {...action.payload};

    case SORT_FLIGHTS:
      const sortFunc = sortFunction(action.payload);
      const newState = {...state};

      newState.result.flights.sort((a, b) => sortFunc(a, b));
      return newState;

    default:
      return state;
  }
}

export default flightsReducer;