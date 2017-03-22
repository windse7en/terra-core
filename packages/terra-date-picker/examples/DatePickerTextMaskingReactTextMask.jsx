import React, { PropTypes } from 'react';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import DatePipe from './DatePipe';
import TimePipe from './TimePipe';
import DatePicker from '../src/DatePicker';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm-dd-yyyy');
const datePipe = DatePipe('mm-dd-yyyy');
const timePipe = TimePipe('hh:mm');

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
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          keepCharPositions
          placeholderChar="_"
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
        <MaskedInput
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type="text"
          mask={[/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
          keepCharPositions
          placeholderChar="-"
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
        <MaskedInput
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type="text"
          mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
          keepCharPositions
          placeholderChar="_"
          pipe={datePipe}
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

class CustomInputWithTextMasking4 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <MaskedInput
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="hh:mm"
          type="text"
          mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
          keepCharPositions
          placeholderChar="_"
          pipe={timePipe}
        />
      </div>)
    );
  }
}

class CustomInputWithTextMasking5 extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <MaskedInput
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          placeholder="[/[0-1]/, /[0-9]/]"
          type="number"
          mask={[/[0-1]/, /[0-9]/]}
          keepCharPositions
          placeholderChar="_"
          // pipe={timePipe}
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
