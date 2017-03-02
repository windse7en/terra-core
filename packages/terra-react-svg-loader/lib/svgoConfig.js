'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * svgoConfig - Configuration object for svgo
 */
var svgoConfig = {
  multipass: true,
  floatPrecision: 2,
  plugins: [{
    mergePaths: false
  }, {
    removeTitle: true
  }, {
    addAttributesToSVGElement: {
      attribute: 'aria-hidden="true"'
    }
  }, {
    addClassesToSVGElement: {
      className: 'terra-Icon'
    }
  }]
};

exports.default = svgoConfig;