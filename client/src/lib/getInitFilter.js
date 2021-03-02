const getAirlinesBestPrice = (flights) => {
  const airlines = {};
  const stops = [true];
  const initStateCheckbox = true;
  const initStateDisabled = false;

  flights.forEach(flight => {
    const airline = flight.flight.carrier.caption;
    const price = parseFloat(flight.flight.price.total.amount);
    const legs = flight.flight.legs;

    if ( airlines[airline] === undefined || airlines[airline] > price ) {
      airlines[airline] = {};
      airlines[airline]['price'] = price;
      airlines[airline]['checked'] = initStateCheckbox;
      airlines[airline]['disabled'] = initStateDisabled;
    }

    legs.forEach(leg => {
      if (leg.segments.length > stops.length) {
        leg.segments.forEach( (segment, index) => stops[index] = initStateCheckbox )
      }
    });
  });

  return {
    airlines,
    stops
  };
};

export default getAirlinesBestPrice;