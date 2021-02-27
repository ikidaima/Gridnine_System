import { SORT_BY_PRICE_INCREASE } from "../../constants/constants";
import { CHANGE_TYPE_SORT } from "../../constants/typeOfActions";

const initState = SORT_BY_PRICE_INCREASE;

const typeOfSortReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TYPE_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default typeOfSortReducer;