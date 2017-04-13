/*eslint-disable no-debugger*/

import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import classNames from 'classnames';
import Button from 'terra-button';
import Item from './CollapsibleButtonItem';
import Group from './CollapsibleButtonGroup';
import './CollapsibleButtonView.scss';

const propTypes = {
  /**
   * The children to be placed within the button view.
   */
  children: PropTypes.node,
  /**
   * The children to be placed within the button view.
   */
  alignment: PropTypes.oneOf(['alignStart', 'alignEnd']),
};

const defaultProps = {
  children: undefined,
  alignment: 'alignStart',
};

class CollapsibleButtonView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hiddenIndexes: [] };
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleButton = <Button text="…" onClick={this.handleToggle} />;
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { 
        this.setState({ hiddenIndexes: [] }); 
        this.forceUpdate(); 
        this.handleResize(entries[0].contentRect.width); 
      });
      this.resizeObserver.observe(this.container);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  handleToggle() {
    if (this.state.toggleOpen) {
      this.handleResize(this.parentNode.getBoundingClientRect().width);
    } else {
      this.setState({ toggleOpen: true, hiddenIndexes: [] });
    }
  }

  handleResize(width) {
    // do calculation here
    const widthToMeasure = width;
    const hiddenIndexes = [];
    let calcWidth = 0;

    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.container.children[i];
      if (!child) {
        break;
      }
      calcWidth += child.getBoundingClientRect().width;
      if (calcWidth > widthToMeasure) {
        hiddenIndexes.push(i);
      }
    }

    if (hiddenIndexes.length !== this.state.hiddenIndexes.length) {
      this.setState({ toggleOpen: false, hiddenIndexes });
    }
  }

  visibleChildComponents(children) {
    const visibleChildren = [];
    for (let i = 0; i < children.length; i += 1) {
      if (this.state.hiddenIndexes.indexOf(i) < 0) {
        visibleChildren.push(children[i]);
      }
    }
    return visibleChildren;
  }

  hiddenChildComponents(children) {
    const indexes = this.state.hiddenIndexes;
    const hiddenChildren = [];
    for (let i = 0; i < indexes.length; i += 1) {
      hiddenChildren.push(children[indexes[i]]);
    }
    return hiddenChildren;
  }

  render() {
    const { children,
            alignment,
            ...customProps } = this.props;

    const listClassNames = classNames([
        'terra-CollapsibleButtonView',
        { [`terra-CollapsibleButtonView-${alignment}`]: alignment },
        customProps.className,
      ]);

    const visibleChildren = this.visibleChildComponents(children);
    const hiddenChildren = this.hiddenChildComponents(children);

    let toggle;
    if (hiddenChildren.length > 0) {
      toggle = this.toggleButton;
    }

    return (
      <div className="terra-CollapsibleButtonView">
        <div className="terra-CollapsibleButtonView-container" ref={this.setContainer}>
          {visibleChildren.map((child, childIndex) => {
            const childKey = childIndex;
            return (
              <div className="terra-CollapsibleButtonView-item" key={childKey}>
                {child}
              </div>
            );
          })}
        </div>
        {toggle}
      </div>
    );
  }
}

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;
CollapsibleButtonView.Item = Item;
CollapsibleButtonView.Group = Group;

export default CollapsibleButtonView;

