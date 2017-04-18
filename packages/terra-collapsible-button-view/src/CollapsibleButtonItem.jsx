import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './CollapsibleButtonItem.scss';

const propTypes = {
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: PropTypes.bool,
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: PropTypes.bool,
  /**
   * Indidcates if the element is viewed inline or in list style.
   */
  isHidden: PropTypes.bool,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
};

const defaultProps = {
  text: '',
  icon: undefined,
  isReversed: false,
  isSelected: false,
  isHidden: false,
  onClick: undefined,
  children: undefined,
};

const CollapsibleButtonItem = ({ 
  text,
  icon,
  isReversed,
  isSelected,
  isHidden,
  onClick,
  children,
  ...customProps, 
}) => {
  const buttonClassName = classNames([
    'terra-CollapsibleButtonItem',
    { 'terra-CollapsibleButtonItem--selected': isSelected },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={buttonClassName}>
      {text}
    </div>);
};

CollapsibleButtonItem.propTypes = propTypes;
CollapsibleButtonItem.defaultProps = defaultProps;

export default CollapsibleButtonItem;
