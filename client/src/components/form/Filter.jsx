import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NONE_STOPE, ONE_STOP } from '../../constants/constants';
import { setFilterPrice, setFilterStops } from '../../store/action';
import isNumber from '../../lib/isNumber';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const checkboxStopHandler = (event) => {
    const numberOfStop = +event.target.value;
    const isChecked = event.target.checked;

    dispatch( setFilterStops(numberOfStop, isChecked) );
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

        <label className="form__input-wrapper form__input-wrapper--flex">
          <input
            type="checkbox"
          />
          <span className="form__input-description form__input-description--single-row">Аэрофлот - российские авиалинии</span>
          <span className="form__input-description--price">от 31733 р.</span>
        </label>

      </div>
    </div>
  );
}

export default Filter;