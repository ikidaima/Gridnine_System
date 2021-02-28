import React from 'react';

import FlightHead from './FlightHead';
import FlightLeg from './FlightLeg';

const FlightCard = ( { flight } ) => {
  const legs = flight.legs;
  const carrier = `${flight.carrier.uid} ${flight.carrier.caption}`;
  const price = flight.price.total.amount;

  return (
    <div className="flight__card card">
      <FlightHead
        carrier={carrier}
        price={price}
      />
      <div className="card__legs">
        {
          legs.map((leg, index) => {
            const numberOfLastSegment = leg.segments.length - 1;
            const departureCity = leg.segments[0].departureCity ? leg.segments[0].departureCity.caption : null;
            const departureAirport = leg.segments[0].departureAirport.caption
            const departAirportUid = leg.segments[0].departureAirport.uid
            const departureDate = leg.segments[0].departureDate;
            const arrivalCity = leg.segments[numberOfLastSegment].arrivalCity ? leg.segments[numberOfLastSegment].arrivalCity.caption : null;
            const arrivalAirport = leg.segments[numberOfLastSegment].arrivalAirport.caption;
            const arrivalAirportUid = leg.segments[numberOfLastSegment].arrivalAirport.uid;
            const arrivalDate = leg.segments[numberOfLastSegment].arrivalDate;


            return (
              <FlightLeg
                key={index}
                departCity={departureCity}
                departAirport={departureAirport}
                departAirportUid={departAirportUid}
                departDate={departureDate}
                arrivalCity={arrivalCity}
                arrivalAirport={arrivalAirport}
                arrivalAirportUid={arrivalAirportUid}
                arrivalDate={arrivalDate}
                carrier={carrier}
                stops={numberOfLastSegment}
              />
            );
          })
        }
      </div>
      <button className="card__button" type="button">Выбрать</button>
    </div>
  );
};

export default FlightCard;