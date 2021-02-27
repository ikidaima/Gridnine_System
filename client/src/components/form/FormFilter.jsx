import React from 'react';

import Filter from './Filter';
import Sorting from './Sorting';

const FormFilter = () => {
  return (
    <div className="form">
      <Sorting />
      <Filter />
    </div>
  );
};

export default FormFilter;