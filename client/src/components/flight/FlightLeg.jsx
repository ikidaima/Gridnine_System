import React from 'react';

import { ARR_WORD_TRANSFER, LOCAL_RUS, OPTION_DATE, OPTION_TIME } from '../../constants/constants';
import declOfNum from '../../lib/declOfNum';

const FlightLeg = (props) => {
  const departDateTime = new Date(props.departDate);
  const departTime = departDateTime.toLocaleTimeString(LOCAL_RUS, OPTION_TIME);
  const departDate = departDateTime.toLocaleDateString(LOCAL_RUS, OPTION_DATE);
  const arrivalDateTime = new Date(props.arrivalDate);
  const arrivalTime = arrivalDateTime.toLocaleTimeString(LOCAL_RUS, OPTION_TIME);
  const arrivalDate = arrivalDateTime.toLocaleDateString(LOCAL_RUS, OPTION_DATE);
  const stops = props.stops ? `${props.stops} ${declOfNum(props.stops, ARR_WORD_TRANSFER)}` : null;
  const duration = (arrivalDateTime - departDateTime) / 1000 / 60;

  const numberOfMinute = duration % 60;
  const numberOfHour = Math.floor(duration / 60 % 24);
  const numberOfDay = Math.floor(duration / 60 / 24);

  return (
    <div className="card__leg leg">
      <div className="card__container">
        <div className="leg__route">
          {props.departCity}, {props.departAirport}&nbsp;
          &#40;<span className="card__text--blue">{props.departAirportUid}</span>&#41;
          &#8194;<span className="card__text--blue">&#8594;</span>&#8194;
          {props.arrivalCity}, {props.arrivalAirport}&nbsp;
          &#40;<span className="card__text--blue">{props.arrivalAirportUid}</span>&#41;
        </div>

        <div className='leg__time time'>
          <div>
            <span>{departTime}</span>&#8194;
            <span className="card__text--blue">{departDate}</span>
          </div>
          <div className="time__duration">
            {numberOfDay ? numberOfDay + ' д' : null}&nbsp;
            {numberOfHour || numberOfDay ? numberOfHour + ' ч' : null}&nbsp;
            {numberOfMinute + ' м'}
          </div>
          <div>
            <span>{arrivalTime}</span>&#8194;
            <span className="card__text--blue">{arrivalDate}</span>
          </div>
        </div>

        <div className="leg__stops">
          <span className="card__text--orange stop--position">{stops}</span>
        </div>

        <div className="leg__carrier">
          Рейс выполняет: {props.carrier}
        </div>
      </div>
    </div>
  );
};

export default FlightLeg;