import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import './CollapsibleButtonView.scss';

const propTypes = {
  buttonViews: PropTypes.arrayOf(PropTypes.element),
};

const defaultProps = {
  buttonViews: [],
};

class CollapsibleButtonView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hiddenIndexes: [] };
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { this.handleResize(entries[0].contentRect.width); });
      this.resizeObserver.observe(this.container);
    } else {
      this.handleResize(window.innerWidth);
      window.addEventListener('resize', this.handleWindowResize);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    } else {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = this.props.responsiveTo === 'parent' ? node.parentNode : null;
  }

  handleResize(width) {
    if (!this.itemSelf) {
      return;
    }

    // do calculation here
    const widthToMeasure = width; // this.itemSelf.clientWidth;
    const hiddenIndexes = [];
    let calcWidth = 0;

    for (let i = 0; i < this.props.buttonViews.length; i += 1) {
      if (!this.itemSelf.children[i]) {
        break;
      }
      calcWidth += this.itemSelf.children[i].clientWidth;
      if (calcWidth > widthToMeasure) {
        hiddenIndexes.push(i);
      }
    }

    if (hiddenIndexes.length !== this.state.hiddenIndexes.length) {
      this.setState({ hiddenIndexes });
    }
  }

  handleWindowResize() {
    this.handleResize(window.innerWidth);
  }

  visibleButtonViews(buttonViews) {
    const cleanButtonViews = [];
    for (let i = 0; i < buttonViews.length; i += 1) {
      if (!this.state.hiddenIndexes.includes(i)) {
        cleanButtonViews.push(buttonViews[i]);
      }
    }
    return cleanButtonViews;
  }

  render() {
    const cleanButtonViews = this.visibleButtonViews(this.props.buttonViews);
    return (
      <div ref={(a) => { this.itemSelf = a; }} className="terra-CollapsibleButtonView">{cleanButtonViews}</div>
    );
  }
}

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;

export default CollapsibleButtonView;

