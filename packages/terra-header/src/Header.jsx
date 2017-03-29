import React, { PropTypes } from 'react';
import Arrange from 'terra-arrange';
import classNames from 'classnames';
import './Header.scss';

const propTypes = {
  title: PropTypes.string,
  startContent: PropTypes.element,
  endContent: PropTypes.element,
};

const defaultProps = {
  title: '',
  startContent: [],
  endContent: [],
};

const Header = (title, startContent, endContent, ...customProps) => {
  const attributes = Object.assign({}, customProps);
  const headerClassNames = classNames([
    'terra-Header',
    attributes.className,
  ]);

  return (
    <header {...attributes} className={headerClassNames}>
      <Arrange
        fitStart={startContent}
        fitEnd={endContent}
        fill=<h1>{title}</h1>
      />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
