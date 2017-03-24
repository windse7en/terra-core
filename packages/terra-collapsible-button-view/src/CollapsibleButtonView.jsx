/*eslint-disable no-debugger*/

import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import './CollapsibleButtonView.scss';

// const propTypes = {
// };

// const defaultProps = {
// };

class CollapsibleButtonView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hiddenIndexes: [] };
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    if (this.parentContainer) {
      this.resizeObserver = new ResizeObserver((entries) => { 
        this.setState({ hiddenIndexes: [] }); 
        this.forceUpdate(); 
        this.handleResize(entries[0].contentRect.width); 
      });
      this.resizeObserver.observe(this.parentContainer);
    }
  }

  componentWillUnmount() {
    if (this.parentContainer) {
      this.resizeObserver.disconnect(this.parentContainer);
      this.container = null;
      this.parentContainer = null;
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
    this.parentContainer = node.parentNode;
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
      this.setState({ hiddenIndexes });
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

  render() {
    const visibleChildren = this.visibleChildComponents(this.props.children);
    return (
      <div className="terra-CollapsibleButtonView" ref={this.setContainer}>
        {visibleChildren.map((child, childIndex) => {
          const childKey = childIndex;
          return (
            <div className="terra-CollapsibleButtonView-item" key={childKey}>
              {child}
            </div>
          );
        })}
      </div>
    );
  }
}

// CollapsibleButtonView.propTypes = propTypes;
// CollapsibleButtonView.defaultProps = defaultProps;

export default CollapsibleButtonView;

