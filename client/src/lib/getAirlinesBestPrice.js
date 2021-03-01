const getAirlinesBestPrice = (flights) => {
  const airlines = {};

  flights.forEach(flight => {
    const airline = flight.flight.carrier.caption;
    const price = parseFloat(flight.flight.price.total.amount);

    if ( airlines[airline] === undefined || airlines[airline] > price ) {
      airlines[airline] = {};
      airlines[airline]['price'] = price;
      airlines[airline]['checked'] = true;
      airlines[airline]['disabled'] = false;
    }

  });

  return airlines;
};

export default getAirlinesBestPrice;