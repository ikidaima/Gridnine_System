import { TOGGLE_LOADING_STATUS } from "../../constants/typeOfActions";

const initState = false;

const isLoadingListReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_STATUS:
      return !state;
    default:
      return state;
  }
}

export default isLoadingListReducer;