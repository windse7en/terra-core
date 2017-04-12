import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './DateTimePicker.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-DateTimePicker--default',
};

const DateTimePicker = (props) => (
  <div />
);

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

export default DateTimePicker;
