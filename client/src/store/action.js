import { CHANGE_TYPE_SORT, GET_FLIGHT, SET_FILTER_PRICE, SET_FILTER_STOP } from "../constants/typeOfActions";

export function changeTypeOfSort(typeOfSort) {
  return {
    type: CHANGE_TYPE_SORT,
    payload: typeOfSort
  }
}

export function setFilterStops(numberOfStop, isChecked) {
  return {
    type: SET_FILTER_STOP,
    payload: {
      numberOfStop,
      isChecked
    }
  }
}

export function setFilterPrice(value, extremum) {
  return {
    type: SET_FILTER_PRICE,
    payload: {
      value,
      extremum
    }
  }
}

export function getFlights(flights) {
  return {
    type: GET_FLIGHT,
    payload: flights
  }
}

export function fetchFlights() {
  return function(dispatch) {
    fetch('http://127.0.0.1:3000/flight')
      .then(response => response.json())
      .then(answer => dispatch( getFlights(answer) ));
  }
}