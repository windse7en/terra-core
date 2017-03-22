import React, { PropTypes } from 'react';
import InputElement from 'react-input-mask';
import DatePicker from '../src/DatePicker';

// eslint-disable-next-line react/prefer-stateless-function
class CustomInputWithTextMasking1 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <InputElement
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type="text"
          mask="99/99/9999"
          maskChar="_"
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

class CustomInputWithTextMasking2 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <InputElement
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="YYYY/MM/DD"
          type="text"
          mask="9999/99/99"
          maskChar="-"
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

class CustomInputWithTextMasking3 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <InputElement
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="hh:mm am/pm"
          type="text"
          mask="hH:m9 pq"
          maskChar="-"
          formatChars={{
            h: '[0-1]',
            H: '[0-9]',
            m: '[0-5]',
            9: '[0-9]',
            p: '[aApP]',
            q: '[mM]',
            a: '[A-Za-z]',
            '*': '[A-Za-z0-9]' }}
        />
      </div>)
    );
  }
}

class CustomInputWithTextMasking4 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <InputElement
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="HH:mm"
          type="text"
          mask="hH:m9"
          maskChar="-"
          formatChars={{
            h: '[0-2]',
            H: '[0-9]',
            m: '[0-5]',
            9: '[0-9]',
            a: '[A-Za-z]',
            '*': '[A-Za-z0-9]' }}
        />
      </div>)
    );
  }
}

class CustomInputWithTextMasking5 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <InputElement
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="99"
          type="number"
          mask="99"
          maskChar=" "
          // formatChars={{
          //   9: '[0-9]',
          //   h: '[0-2]',
          //   H: '[1-9]',
          //   m: '[0-5]',
          //   a: '[A-Za-z]',
          //   '*': '[A-Za-z0-9]' }}
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

CustomInputWithTextMasking2.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

CustomInputWithTextMasking3.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

CustomInputWithTextMasking4.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

CustomInputWithTextMasking5.propTypes = {
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
    <DatePicker
      customInput={<CustomInputWithTextMasking2 />}
    />
    <DatePicker
      customInput={<CustomInputWithTextMasking3 />}
    />
    <DatePicker
      customInput={<CustomInputWithTextMasking4 />}
    />
  </div>
);

export default DatePickerCustomInput;
