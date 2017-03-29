/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HeaderTests from './HeaderTests';
import DefaultHeader from './DefaultHeader';

const routes = (
  <div>
    <Route path="/tests/header-tests" component={HeaderTests} />
    <Route path="/tests/header-tests/default" component={DefaultHeader} />
  </div>
);

export default routes;
