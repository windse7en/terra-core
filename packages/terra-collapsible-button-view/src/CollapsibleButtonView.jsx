import React, { PropTypes } from 'react';
import Measure from 'react-measure';
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
  }

  componentDidMount() {
    this.remeasure(this.state.hiddenIndexes);
  }

  remeasure() {
    if (!this.itemSelf) {
      return;
    }

    // do calculation here
    const widthToMeasure = this.itemSelf.clientWidth;
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
      <Measure onMeasure={(dimensions) => { this.setState({ hiddenIndexes: [] }); this.remeasure(dimensions); }}>
        <div ref={(a) => { this.itemSelf = a; }} className="terra-Frame">{cleanButtonViews}</div>
      </Measure>
    );
  }
}

CollapsibleButtonView.propTypes = propTypes;
CollapsibleButtonView.defaultProps = defaultProps;

export default CollapsibleButtonView;

