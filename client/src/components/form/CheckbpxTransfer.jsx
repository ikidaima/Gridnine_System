import React from 'react';

import { ARR_WORD_TRANSFER } from '../../constants/constants';
import declOfNum from '../../lib/declOfNum';

const CheckboxTransfer = (props) => {
  return (
    <label className="form__input-wrapper">
      <input
        type="checkbox"
        value={props.stop}
        checked={ props.checked }
        onChange={props.handler}
      />
      <span className="form__input-description">{props.stop ? props.stop : 'без'} {declOfNum(props.stop, ARR_WORD_TRANSFER)}</span>
    </label>
  )
};

export default CheckboxTransfer;