import { GET_FLIGHT } from "../../constants/typeOfActions";

const initState = {};

const flightsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FLIGHT:
      return {...action.payload}
    default:
      return state;
  }
}

export default flightsReducer;