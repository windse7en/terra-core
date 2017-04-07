import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import { I18nProvider } from 'terra-i18n';

const newMessages = {
  'Terra.test.third': 'Third Provider:',
};

class ThirdProvider extends React.Component {
  render() {
    const props = this.props;
    const messages = Object.assign({}, props.intl.messages, newMessages);

    return (
      <I18nProvider
        locale={props.intl.locale}
        messages={messages}
      >
        <FormattedMessage id="Terra.test.third" />
        <FormattedMessage id="Terra.ajax.error" />
        <p>{ JSON.stringify(messages) }</p>
      </I18nProvider>
    );
  }
}

export default injectIntl(ThirdProvider);
