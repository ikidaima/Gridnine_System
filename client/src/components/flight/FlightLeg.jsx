import React from 'react';

const FlightLeg = (props) => {
  return (
    <div className="card__leg leg">
      <div className="card__container">
        <div className="leg__route">
          {props.departCity}, {props.departAirport}&nbsp;
          &#40;<span className="card__text--blue">{props.departAirportUid}</span>&#41;
          &#8194;<span className="card__text--blue">&#8594;</span>&#8194;
          {props.arriveCity}, {props.arriveAirport}&nbsp;
          &#40;<span className="card__text--blue">{props.arriveAirportUid}</span>&#41;
        </div>

        <div className='leg__time time'>
          <div>1 <span className="card__text--blue">18 aug</span></div>
          <div className="time__duration">2 ч 15 мин</div>
          <div>3 <span className="card__text--blue">18 aug</span></div>
        </div>

        <div className="leg__stops">
          <span className="card__text--orange stop--position">1 пересадка</span>
        </div>

        <div className="leg__carrier">
          Рейс выполняет: {props.carrier}
        </div>
      </div>
    </div>
  );
};

export default FlightLeg;