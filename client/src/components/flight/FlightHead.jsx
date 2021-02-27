import React from 'react';

const FlightHead = ({carrier, price}) => {
  return (
    <div className="card__head">
      <div className="card__container">
        <div className="card__air-logo">
          {carrier}
        </div>
        <div className="card__price">
          <div>
            {price} &#8381;
          </div>
          <div className="card__price-description">
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHead;