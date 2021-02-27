import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../store/action';
import FlightList from './flight/FlightList';

import FormFilter from './form/FormFilter';

const App = () => {
  const dispatch = useDispatch();

  dispatch( fetchFlights() );

  return (
    <div className="app-container">
      <FormFilter />
      <div className="flights">
        <FlightList />
      </div>
    </div>
  );
}

export default App;