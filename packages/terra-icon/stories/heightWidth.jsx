/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
/* eslint-enable import/no-extraneous-dependencies */

import DeviceCheck from '../src/icon/static/deviceCheck.svg';

storiesOf('Height and Width', module)
  .add('Default', () => (
    <div>
      <DeviceCheck />
      <p>No Height or Width set. Size defaults to 1em.  Size of the icon will scale with font-size.</p>
    </div>
  ))
  .add('Height set', () => (
    <div>
      <DeviceCheck height="44" />
      <div>Height set to 44</div>
    </div>
  ))
  .add('Width set', () => (
    <div>
      <DeviceCheck width="120" />
      <div>Width set to 120</div>
    </div>
  ))
  .add('Height and Width set', () => (
    <div>
      <DeviceCheck height="150" width="150" />
      <div>Height set to 150</div>
      <div>Width set to 150</div>
    </div>
  ))
  .add('Large Height, Small Width', () => (
    <div>
      <DeviceCheck height="150" width="10" />
      <div>Height set to 150</div>
      <div>Width set to 10</div>
    </div>
  ))
  .add('Small Height, Large Width', () => (
    <div>
      <DeviceCheck height="10" width="150" />
      <div>Height set to 10</div>
      <div>Width set to 150</div>
    </div>
  ));
