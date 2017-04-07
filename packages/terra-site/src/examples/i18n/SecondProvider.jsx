import React from 'react';
import { FormattedMessage } from 'react-intl';

import { I18nProvider } from 'terra-i18n';

const newMessages = {
  'Terra.test.second': 'Second Provider:',
};

class SecondProvider extends React.Component {
  render() {
    const props = this.props;
    const messages = Object.assign({}, props.messages, newMessages);

    return (
      <I18nProvider
        locale={props.locale}
        messages={messages}
      >
        <FormattedMessage id="Terra.test.second" />
        <FormattedMessage id="Terra.ajax.error" />
        <p>{ JSON.stringify(messages) }</p>
      </I18nProvider>
    );
  }
}

export default SecondProvider;
