import { SORT_BY_FLIGHT_TIME, SORT_BY_PRICE_DECREASE, SORT_BY_PRICE_INCREASE } from "../constants/constants";


export default function(typeOfSort) {
  switch (typeOfSort) {
    case SORT_BY_PRICE_INCREASE:
      return sortPriceToIncrease;

    case SORT_BY_PRICE_DECREASE:
      return sortPriceToDecrease;

    case SORT_BY_FLIGHT_TIME:
      return sortTimeToIncrease;
  }
}

function sortPriceToIncrease(firstValue, secondValue) {
  return +firstValue.flight.price.total.amount - +secondValue.flight.price.total.amount;
}

function sortPriceToDecrease(firstValue, secondValue) {
  return +secondValue.flight.price.total.amount - +firstValue.flight.price.total.amount;
}

function sortTimeToIncrease(firstValue, secondValue) {
  const totalTimeFirst = firstValue.flight.legs.reduce((sum, current) => {
    return sum + current.duration;
  }, 0);
  const totalTimeSecond = secondValue.flight.legs.reduce((sum, current) => {
    return sum + current.duration;
  }, 0);

  return totalTimeFirst - totalTimeSecond;
}