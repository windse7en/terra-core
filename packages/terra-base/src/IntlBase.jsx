import React from 'react';

import { I18nProvider, i18nLoader } from 'terra-i18n';

import BaseStyles from './BaseStyles';

const propTypes = {
  locale: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  customMessages: React.PropTypes.object,
};

const defaultProps = {
  locale: 'en',
  customMessages: {},
};

class IntlBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      locale: props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    i18nLoader(this.props.locale, this.setState, this);
  }

  render() {
    if (!this.state.load) return null;
    const {
      locale,
      customMessages,
      ...customProps
    } = this.props;

    const messages = Object.assign({}, this.state.messages, customMessages);

    return (
      <I18nProvider
        locale={this.state.locale}
        messages={messages}
      >
        <BaseStyles {...customProps}>
          {this.props.children}
        </BaseStyles>
      </I18nProvider>
    );
  }
}

IntlBase.propTypes = propTypes;

IntlBase.defaultProps = defaultProps;

export default IntlBase;
