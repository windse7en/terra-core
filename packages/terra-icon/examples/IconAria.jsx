import React from 'react';

import DeviceCheck from '../src/icon/static/deviceCheck.svg';

const IconAria = () => (
  <div>
    <DeviceCheck />
    <p>{'aria-hidden="true"'}</p>
    <hr/>
    <DeviceCheck aria-label="Device Check" />
    <p>{'aria-lablel="Device Check"'}</p>
    <p>{'aria-hidden="false"'}</p>
    <p>{'role="img"'}</p>
  </div>
);

export default IconAria;
