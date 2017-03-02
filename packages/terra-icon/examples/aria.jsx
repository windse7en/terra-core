/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
/* eslint-enable import/no-extraneous-dependencies */


import DeviceCheck from '../src/icon/static/deviceCheck.svg';

storiesOf('Aria roles', module)
  .add('no aria-label', () => (
    <div>
      <DeviceCheck />
      <p>{'aria-hidden="true"'}</p>
    </div>
  ))
  .add('aria-label', () => (
    <div>
      <DeviceCheck aria-label="Device Check" />
      <p>{'aria-lablel="Device Check"'}</p>
      <p>{'aria-hidden="false"'}</p>
      <p>{'role="img"'}</p>
    </div>
  ));
