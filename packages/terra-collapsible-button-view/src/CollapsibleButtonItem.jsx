import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './CollapsibleButtonItem.scss';

const propTypes = {
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: PropTypes.bool,
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: PropTypes.bool,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
};

const defaultProps = {
  isSelected: false,
  isReversed: false,
};

const CollapsibleButtonItem = ({ 
  isSelected, 
  text, 
  icon, 
  isReversed, 
  ...customProps, 
}) => {
  const buttonClassName = classNames([
    'terra-CollapsibleButtonItem',
    { 'terra-CollapsibleButtonItem--selected': isSelected },
    customProps.className,
  ]);

  return (
    <div {...customProps} aria-selected={isSelected} className={buttonClassName}>
      {text}
    </div>);
};

CollapsibleButtonItem.propTypes = propTypes;
CollapsibleButtonItem.defaultProps = defaultProps;

export default CollapsibleButtonItem;
