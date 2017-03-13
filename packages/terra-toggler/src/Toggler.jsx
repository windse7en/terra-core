import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Toggler.scss';

const propTypes = {
  header: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  isCollapsed: PropTypes.bool,
  handleToggled: React.PropTypes.func,
  children: PropTypes.node,
};

const defaultProps = {
  isCollapsed: true,
  handleToggled: null,
  children: null,
};

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: props.isCollapsed,
    };
    this.internalHandleToggled = this.internalHandleToggled.bind(this);
  }

  internalHandleToggled(event) {
    this.setState({ isCollapsed: !this.state.isCollapsed });
    if (this.props.handleToggled !== null) {
      this.props.handleToggled(event);
    }
  }

  render() {
    const { header, content, isCollapsed, handleToggled, children, ...customProps } = this.props;
    const collapsiblePanelClass = classNames([
      'terra-Toggler',
      { 'terra-Toggler--is-open': !(this.state.isCollapsed) },
      { 'terra-Toggler--is-collapsed': this.state.isCollapsed },
      customProps.className,
    ]);

    return (
      // TODO: Links in header shouldn't trigger collapse
      <article {...customProps} className={collapsiblePanelClass}>
        <button aria-pressed="false" className="terra-Toggler-header" onClick={this.internalHandleToggled} tabIndex="0">
          {header}
        </button>
        <div className="terra-Toggler-content" aria-hidden={!isCollapsed ? 'true' : null}>
          {content}
          {children}
        </div>
      </article>
    );
  }
}

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
