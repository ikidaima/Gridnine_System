import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { KEY_AIRLINES, NONE_STOPE, ONE_STOP } from '../../constants/constants';
import { filterFlights, setFilterAirline, setFilterPrice, setFilterStops, sortFlights, toggleFilterAirlineDisabled } from '../../store/action';
import isNumber from '../../lib/isNumber';
import CheckboxTransfer from './CheckbpxTransfer';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const checkboxStopHandler = (event) => {
    const numberOfStop = +event.target.value;
    const isChecked = event.target.checked;

    dispatch( setFilterStops(numberOfStop, isChecked) );
    dispatch( filterFlights() );
    dispatch( sortFlights() );
    dispatch( toggleFilterAirlineDisabled() );
  };
  const checkboxAirlineHandler = (event) => {
    dispatch( setFilterAirline(event.target.name, event.target.checked) );
    dispatch( filterFlights() );
    dispatch( sortFlights() );
  };
  const inputPriceHandler = (event) => {
    if ( isNumber(event.nativeEvent.data) || event.nativeEvent.inputType === 'deleteContentBackward' ) {
      dispatch( setFilterPrice(+event.target.value, event.target.name) );
      dispatch( filterFlights() );
      dispatch( sortFlights() );
      dispatch( toggleFilterAirlineDisabled() );
    }
  }

  return (
    <div className="form__filtering form__filtering--mt">
      <div className="form__heading-item">
        <span>Фильтровать</span>
      </div>
      <div className="form__body-item">
        {
          filter.stops.map((stop, index) => {
            return (
              <CheckboxTransfer
                key={index}
                stop={index}
                checked={stop}
                handler={checkboxStopHandler}
              />
            )
          })
        }
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
          Object.keys(filter.airlines).map( (airline, index) => {

            return (
              <label className="form__input-wrapper form__input-wrapper--flex" key={index}>
                  <input
                    type="checkbox"
                    name={airline}
                    checked={filter[KEY_AIRLINES][airline]['checked']}
                    onChange={checkboxAirlineHandler}
                    disabled={filter.airlines[airline]['disabled']}
                  />
                  <span className="form__input-description form__input-description--single-row">{airline}</span>&#8194;
                  <span className="form__input-description--price">от {filter.airlines[airline]['price']} р.</span>
                </label>
            );

          })
        }

      </div>
    </div>
  );
}

export default Filter;