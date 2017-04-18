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
  static childFromIndexPath(children, indexPath) {
    const child = children[indexPath.pop()];

    return childFromIndexPath(children[indexPath.pop()], indexPath);
  }

  static getSelectedItems(children) {
    let selectedItems = [];
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].props.children) {
        selectedItems.push(getSelectedValues(sub[i].props.children));
      } else {
        return children[i].props.isSelected;
      }
    }
    return selectedItems;
  }

  static getInitialState(children) {
    const selectedItems = getSelectedItems(children);
    return { hiddenIndexes: [], selectedItems , toggleOpen: false};
  }

  constructor(props) {
    super(props);
    this.state = getInitialState(this.props.children);
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleButton = <Button text="…" onClick={this.handleToggle} />;
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { 
        this.setState({ hiddenIndexes: [], selectedIndexes: this.state.selectedIndexes, toggleOpen: this.state.toggleOpen });
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
    this.setState({ toggleOpen: !this.toggleOpen, hiddenIndexes: this.state.hiddenIndexes, selectedIndexes: this.state.selectedIndexes });
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
      this.setState({ toggleOpen: false, hiddenIndexes, selectedIndexes: this.state.selectedIndexes });
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

  handleOnClick(event, index) {
    const shouldDismiss = this.children[index].isHidden === true; //needs to be advanced
    if (this.state.toggleOpen && shouldDismiss) {
      this.setState({ toggleOpen: false, hiddenIndexes: this.state.hiddenIndexes, selectedIndexes: this.state.selectedIndexes });
    }
  }

  handleOnChange(event, index) {
    const selectedIndexes = this.state.selectedIndexes; //need to be advanced
    this.setState({ toggleOpen: this.state.toggleOpen, hiddenIndexes: this.state.hiddenIndexes, selectedIndexes });
  }

  wrapOnClick(item) {
    const onClick = item.props.onClick;
    return (event) => {
      this.handleOnClick(event);

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapOnChange(item, index) {
    const onChange = item.props.onChange;
    return (event) => {
      this.handleOnChange(event, index);

      if (onChange) {
        onChange(event);
      }
    };
  }

  wrapChildComponents(children, indexPath) {
    children.map((child, i) => {
      const newProps = {};
      indexPath.push(i);

      if (this.props.children[child].type.displayName !== 'CollapsibleButtonGroup') {
        newProps.onChange = this.wrapOnChange(child);
      } else {
        newProps.onClick = this.wrapOnClick(child);
      }

      if (this.child.children.length > 0) {
        this.wrapChildComponents(this.child.children, i);
      }
      // let onClick;
      // if (isSelectable) {
      //   onClick = this.wrapOnClick(child, i);
      // } else {
      //   onClick = child.props.onClick;
      // }
      // // recursive wrapped shit

      return React.cloneElement(child, {
        onClick,
        isSelected: this.state.selectedIndex === i,
      });
    });
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

    const wrappedChildren = this.wrapChildComponents(children, []);
    const visibleChildren = this.visibleChildComponents(wrappedChildren);
    const hiddenChildren = this.hiddenChildComponents(wrappedChildren);

    let toggle;
    if (hiddenChildren.length > 0) {
      toggle = this.toggleButton;
    }

    let hiddenSection;
    if (this.state.toggleOpen) {
      hiddenSection = <div className="terra-CollapsibleButtonView-hiddenArea">{hiddenChildren}</div>;
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
        <div className="terra-CollapsibleButtonView-toggle">
          {toggle}
        </div>
      </div>
    );
  }
}

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;
CollapsibleButtonView.Item = Item;
CollapsibleButtonView.Group = Group;

export default CollapsibleButtonView;

