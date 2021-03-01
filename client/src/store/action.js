import { KEY_AIRLINES } from "../constants/constants";
import {
  CHANGE_TYPE_SORT,
  FILTER_FLIGHTS,
  GET_FLIGHT,
  INIT_FILTER_AIRLINES,
  SET_FILTER_AIRLINE,
  SET_FILTER_PRICE,
  SET_FILTER_STOP,
  SORT_FLIGHTS,
  TOGGLE_LOADING_STATUS,
  TOGGLE_FILTER_AIRLINE_DISABLED,
} from "../constants/typeOfActions";
import { filterFlightByPrice, filterFlightByStop } from "../lib/filterFlights";

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

export function initFilterAirline() {
  return function(dispatch, getState) {
    const state = getState();

    dispatch( {type: INIT_FILTER_AIRLINES, payload: state.flights} );
  }
}

export function setFilterAirline(airline, isChecked) {
  return {
    type: SET_FILTER_AIRLINE,
    payload: {
      airline,
      isChecked
    }
  }
}

export function toggleFilterAirlineDisabled() {
  return function(dispatch, getState) {
    const state = getState();
    const activeAirlines = {};
    const newStateAirlines = {...state.filter[KEY_AIRLINES]};

    state.flights.forEach(flight => {
      if ( filterFlightByStop(flight.flight.legs, state.filter.stops) && filterFlightByPrice(flight.flight.price.total.amount, state.filter.price) ) {
        activeAirlines[flight.flight.carrier.caption] = true;
      }
    });

    Object.keys(newStateAirlines).forEach(airline => {
      if (activeAirlines[airline]) {
        newStateAirlines[airline]['disabled'] = false;
      } else {
        newStateAirlines[airline]['disabled'] = true;
      }
    });

    dispatch( {type: TOGGLE_FILTER_AIRLINE_DISABLED, payload: newStateAirlines} );
  }
}

export function toggleLoadingStatus() {
  return {
    type: TOGGLE_LOADING_STATUS
  }
}

export function getFlights(flights) {
  return {
    type: GET_FLIGHT,
    payload: flights
  }
}

export function sortFlights() {
  return function(dispatch, getState) {
    const state = getState();
    
    dispatch( {type: SORT_FLIGHTS, payload: state.typeOfSort} );
  }
}

export function filterFlights() {
  return function(dispatch, getState) {
    const state = getState();
    const action = {
      type: FILTER_FLIGHTS,
      payload: {
        flights: state.flights,
        filter: state.filter
      }
    }

    dispatch( action );
  }
}

export function fetchFlights() {
  return function(dispatch) {
    dispatch( toggleLoadingStatus() );

    fetch('http://127.0.0.1:3000/flight')
      .then(response => response.json())
      .then(answer => {
        answer = JSON.parse(answer);
        dispatch( getFlights(answer) );
        dispatch( initFilterAirline() );
        dispatch( filterFlights() );
        dispatch( sortFlights() );
        dispatch( toggleFilterAirlineDisabled() );
      })
      .catch(err => console.log(err))
      .finally(() => dispatch( toggleLoadingStatus() ));
  }
}