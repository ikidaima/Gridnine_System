import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SORT_BY_FLIGHT_TIME, SORT_BY_PRICE_DECREASE, SORT_BY_PRICE_INCREASE } from '../../constants/constants';
import { changeTypeOfSort } from '../../store/action';

const Sorting = () => {
  const dispatch = useDispatch();
  const typeOfSort = useSelector(state => state.typeOfSort);

  const radioInputHandler = (event) => {
    dispatch( changeTypeOfSort(event.target.value) );
  }

  return (
    <div className="form__sorting">
      <div className="form__heading-item">
        <span>Сортировать</span>
      </div>
      <div className="form__body-item">
        <label className="form__input-wrapper">
          <input
            name="sort"
            type="radio"
            value={SORT_BY_PRICE_INCREASE}
            checked={typeOfSort === SORT_BY_PRICE_INCREASE}
            onChange={radioInputHandler}
          />
          <span className="form__input-description">По возрастанию цены</span>
        </label>
        <label className="form__input-wrapper">
          <input
            name="sort"
            type="radio"
            value={SORT_BY_PRICE_DECREASE}
            checked={typeOfSort === SORT_BY_PRICE_DECREASE}
            onChange={radioInputHandler}
          />
          <span className="form__input-description">По убыванию цены</span>
        </label> 
        <label className="form__input-wrapper">
          <input
            name="sort"
            type="radio"
            value={SORT_BY_FLIGHT_TIME}
            checked={typeOfSort === SORT_BY_FLIGHT_TIME}
            onChange={radioInputHandler}
          />
          <span className="form__input-description">По времени в пути</span>
        </label> 
      </div>
    </div>
  )
};

export default Sorting;