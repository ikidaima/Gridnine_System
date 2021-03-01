const filterFlights = (flights, filter) => {
  return flights.filter(flight => {
    return (
      filterFlightByStop(flight.flight.legs, filter.stops) &&
      filterFlightByPrice(flight.flight.price.total.amount, filter.price) &&
      filterFlightByAirline(flight.flight.carrier.caption, filter.airlines)
    );
  });
};

export const filterFlightByStop = (legs, stops) => {
  let isPass = true;

  legs.forEach(leg => isPass = isPass && stops[leg.segments.length - 1]);

  return isPass;
};

export const filterFlightByPrice = (price, rangeOfPrice) => {
  return price > rangeOfPrice.min && price < rangeOfPrice.max;
}

const filterFlightByAirline = (carrier, airlines) => {
  return airlines[carrier]['checked'];
}

export default filterFlights;
