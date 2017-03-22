import React, { PropTypes } from 'react';
import MaskedInput from 'react-maskedinput';
import DatePicker from '../src/DatePicker';

// const formatCharacters = () => (
//       'a': {
//           validate(char) { return char <= 2; }
//       },
//       'b': {
//           validate(char) { return char <= 3; }
//       },
//       'c': {
//           validate(char) { return char <= 5; }
//       }
// );

const formatCharacters = {
  w: {
    validate(char) { return char <= 12; },
  },
  dd: {
    validate(char) { return char <= 31; },
  },
  yyyy: {
    validate(char) { return char <= 5; },
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class CustomInputWithTextMasking1 extends React.PureComponent {

  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <MaskedInput
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type="text"
          mask="ad/bd/cddd"
          formatCharacters={{
            a: {
              validate(char) { return char <= 1; },
              // transform(char) { return char.concat('H:MM'); },
            },
            b: {
              validate(char) { return char <= 3; },
              // transform(char) { return "HH:MM"; },
            },
            c: {
              validate(char) { return char > 0 && char <= 2; },
              // transform(char) { return "HH:MM"; },
            },
            d: {
              validate(char) { return char > 0 && char <= 9; },
              // transform(char) { return "HH:MM"; },
            },
            // b: {
            //   validate(char) { return char <= 3; },
            //   transform(char) { return 'h'; },
            // },
            // c: {
            //   validate(char) { return char <= 5; },
            //   transform(char) { return 'h'; },
            // },
          }}
          placeholderChar="-"
          size={20}
        />
        <button
          className="terra-DatePicker-custom-button react-datepicker-ignore-onclickoutside"
          onClick={this.props.onClick}
          onKeyDown={this.props.onKeyDown}
        />
      </div>)
    );
  }
}

CustomInputWithTextMasking1.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const DatePickerCustomInput = () => (
  <div>
    <DatePicker
      customInput={<CustomInputWithTextMasking1 />}
    />
  </div>
);

export default DatePickerCustomInput;
