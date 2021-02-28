import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { KEY_AIRLINES, NONE_STOPE, ONE_STOP } from '../../constants/constants';
import { setFilterAirline, setFilterPrice, setFilterStops } from '../../store/action';
import isNumber from '../../lib/isNumber';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const flights = useSelector(state => state.flights);
  const airlines = {};

  flights.result ? 
    flights.result.flights.map(flight => {
      const airline = flight.flight.carrier.caption;
      const price = parseFloat(flight.flight.price.total.amount);

      if ( airlines[airline] === undefined || airlines[airline] > price ) {
        airlines[airline] = price;
      }

    }) : 
    null;

  const checkboxStopHandler = (event) => {
    const numberOfStop = +event.target.value;
    const isChecked = event.target.checked;

    dispatch( setFilterStops(numberOfStop, isChecked) );
  };
  const checkboxAirlineHandler = (event) => {
    dispatch( setFilterAirline(event.target.name, event.target.checked) );
  };
  const inputPriceHandler = (event) => {
    if ( isNumber(event.nativeEvent.data) || event.nativeEvent.inputType === 'deleteContentBackward' ) {
      dispatch( setFilterPrice(+event.target.value, event.target.name) );
    }
  }

  return (
    <div className="form__filtering form__filtering--mt">
      <div className="form__heading-item">
        <span>Фильтровать</span>
      </div>
      <div className="form__body-item">
        <label className="form__input-wrapper">
          <input
            type="checkbox"
            value={ONE_STOP}
            checked={ filter.stops[ONE_STOP] }
            onChange={checkboxStopHandler}
          />
          <span className="form__input-description">1 - пересадка</span>
        </label>
        <label className="form__input-wrapper">
          <input
            type="checkbox"
            value={NONE_STOPE}
            checked={ filter.stops[NONE_STOPE] } 
            onChange={checkboxStopHandler}
          />
          <span className="form__input-description">без пересадок</span>
        </label>
      </div>
      
      <div className="form__heading-item">
        <span>Цена</span>
      </div>
      <div className="form__body-item">
        <label className="form__input-wrapper">
          <span className="form__input-description--left">От</span>
          <input
            type="text"
            value={filter.price.min}
            name="min"
            onChange={inputPriceHandler}
          />
        </label>
        <label className="form__input-wrapper">
          <span className="form__input-description--left">До</span>
          <input
            type="text"
            value={filter.price.max}
            name="max"
            onChange={inputPriceHandler}
          />
        </label>
      </div>

      <div className="form__heading-item">
        <span>Авиакомпании</span>
      </div>
      <div className="form__body-item">

        {
          Object.keys(airlines).sort().map( (airline, index) => {
            return (
              <label className="form__input-wrapper form__input-wrapper--flex" key={index}>
                  <input
                    type="checkbox"
                    name={airline}
                    checked={filter[KEY_AIRLINES].has(airline)}
                    onChange={checkboxAirlineHandler}
                  />
                  <span className="form__input-description form__input-description--single-row">{airline}</span>&#8194;
                  <span className="form__input-description--price">от {airlines[airline]} р.</span>
                </label>
            );
          })
        }

      </div>
    </div>
  );
}

export default Filter;