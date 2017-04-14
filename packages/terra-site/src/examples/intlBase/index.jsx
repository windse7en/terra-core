import React from 'react';

import { FormattedMessage } from 'react-intl';
import { IntlBase } from 'terra-base';

const customMessages = {
  'Terra.isInIntlBase': 'This is in the IntlBase',
};

const App = () => (
  <IntlBase
    locale="en"
    customMessages={customMessages}
  >
    <p>
      <FormattedMessage id="Terra.isInIntlBase" />
    </p>
    <p>
      <FormattedMessage id="Terra.ajax.error" />
    </p>
  </IntlBase>
);

export default App;
