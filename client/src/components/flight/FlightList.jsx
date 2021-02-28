import React, {useState, Fragment} from 'react';
import { useSelector } from 'react-redux'

import FlightCard from './FlightCard';
import Loading from '../generic/Loading';



const FlightList = () => {
  const flights = useSelector(state => state.flights);
  const [numberOfListItem, setNumberOfListItem] = useState(10);
  const incrementNumber = 10;

  const buttonClickHandler = () => {

    if (numberOfListItem < flights.result.flights.length) {
      setNumberOfListItem(state => state + incrementNumber);
    }

  }

  if (flights.result) {
    return (
      <Fragment>
        <ul className="flight__list">
          {
            flights.result.flights.map((flight, index) => {
              if (index < numberOfListItem) {
                return (
                  <li className="flight__item" key={flight.flightToken}>
                    <FlightCard flight={flight.flight} />
                  </li>
                )
              }
            })
          }
        </ul>
        <button
          className="flight__btn"
          onClick={buttonClickHandler}
        >
          Показать еще
        </button>
      </Fragment>
    )
  }

  return <Loading isLoading={true}/>;
};

export default FlightList;