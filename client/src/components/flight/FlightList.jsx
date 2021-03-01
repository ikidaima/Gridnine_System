import React, {useState, Fragment} from 'react';
import { useSelector } from 'react-redux'

import FlightCard from './FlightCard';
import Loading from '../generic/Loading';



const FlightList = () => {
  const flights = useSelector(state => state.flightsIsFiltered);
  const isLoading = useSelector(state => state.isLoadingList);

  const [numberOfListItem, setNumberOfListItem] = useState(10);
  const incrementNumber = 10;

  const buttonClickHandler = () => {

    if (numberOfListItem < flights.length) {
      setNumberOfListItem(state => state + incrementNumber);
    }

  }

  if (isLoading) {
    return <Loading isLoading={true}/>
  }

  if (flights.length) {
    return (
      <Fragment>
        <ul className="flight__list">
          {
            flights.map((flight, index) => {
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
        {
          numberOfListItem < flights.length ?
          <button
            className="flight__btn"
            onClick={buttonClickHandler}
          >
            Показать еще
          </button> :
          null
        }
      </Fragment>
    )
  } else {
    return <p>Нет билетов по заданному фильтру</p>
  }

};

export default FlightList;