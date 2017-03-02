import React from 'react';

import DeviceCheck from '../src/icon/static/deviceCheck.svg';

const IconHeightWidth = () => (
    <div>
      <DeviceCheck />
      <p>No Height or Width set. Size defaults to 1em.  Size of the icon will scale with font-size.</p>
      <hr/>
      <DeviceCheck height="44" />
      <div>Height set to 44</div>
      <hr/>
      <DeviceCheck width="120" />
      <div>Width set to 120</div>
      <hr/>
      <DeviceCheck height="150" width="150" />
      <div>Height set to 150</div>
      <div>Width set to 150</div>
      <hr/>
      <DeviceCheck height="150" width="10" />
      <div>Height set to 150</div>
      <div>Width set to 10</div>
      <hr/>
      <DeviceCheck height="10" width="150" />
      <div>Height set to 10</div>
      <div>Width set to 150</div>
    </div>
    );

export default IconHeightWidth;
