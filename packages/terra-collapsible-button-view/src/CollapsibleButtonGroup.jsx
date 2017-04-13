import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Item from './CollapsibleButtonItem';
import './CollapsibleButtonGroup.scss';

const propTypes = {
  /**
   * Child nodes
   **/
  children: PropTypes.node,
  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isSelectable: PropTypes.bool,
  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isHidden: PropTypes.bool,
  /**
   * Callback function when the state changes
   **/
  onChange: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isSelectable: false,
  isHidden: false,
  onChange: undefined,
};

class CollapsibleButtonGroup extends React.Component {
  static getInitialState(buttons, isSelectable) {
    if (!isSelectable) { return null; }

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].props.isSelected) {
        return i;
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      selectedIndex: CollapsibleButtonGroup.getInitialState(this.props.buttons.concat(this.props.children), this.props.isSelectable),
    };
  }

  componentWillReceiveProps(nextProps) {
    const newSelectedIndex = CollapsibleButtonGroup.getInitialState(nextProps.buttons.concat(nextProps.children), nextProps.isSelectable);

    if (newSelectedIndex !== this.state.selectedIndex) {
      this.setState({ selectedIndex: newSelectedIndex });
    }
  }

  handleOnClick(event, index) {
    // No need to re-render if the button clicked is already selected
    if (this.state.selectedIndex !== index) {
      this.setState({ selectedIndex: index });

      if (this.props.onChange) {
        this.props.onChange(this.state.selectedIndex);
      }
    }
  }

  wrapOnClick(item, index) {
    const onClick = item.props.onClick;
    return (event) => {
      this.handleOnClick(event, index);

      if (onClick) {
        onClick(event);
      }
    };
  }

  render() {
    const { onChange, isSelectable, children, ...customProps } = this.props;
    const buttonGroupClassNames = classNames(['terra-CollapsibleButtonGroup',
      customProps.className,
    ]);

    const allButtons = children.map((button, i) => {
      let onClick;
      if (isSelectable) {
        onClick = this.wrapOnClick(button, i);
      } else {
        onClick = button.props.onClick;
      }

      return React.cloneElement(button, {
        onClick,
        isSelected: this.state.selectedIndex === i,
      });
    });

    return (
      <div {...customProps} className={buttonGroupClassNames}>
        {allButtons}
      </div>
    );
  }
}

CollapsibleButtonGroup.propTypes = propTypes;
CollapsibleButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;

