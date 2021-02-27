import React from 'react';

import FlightHead from './FlightHead';
import FlightLeg from './FlightLeg';

const FlightCard = ( { flight } ) => {
  const segments = flight.legs;
  const carrier = `${flight.carrier.uid} ${flight.carrier.caption}`;
  const price = flight.price.total.amount;

  console.log(segments);

  return (
    <div className="flight__card card">
      <FlightHead
        carrier={carrier}
        price={price}
      />
      <div className="card__legs">
        <FlightLeg
          departCity="Moscow"
          departAirport="Sheremetevo"
          departAirportUid="SVO"
          arriveCity="London"
          arriveAirport="laksjdhf"
          arriveAirportUid="DFO"
          carrier={carrier}
        />
      </div>
      <button className="card__button" type="button">Выбрать</button>
    </div>
  );
};

export default FlightCard;