'use strict';

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * svgToIcon - Takes an svgObject and returns it as an Icon object
 * @param {object} svgObject object with svg string and name
 */
var svgToIcon = function svgToIcon(svgObject) {
  return new Promise(function (resolve, reject) {
    var name = svgObject.name;
    var svg = svgObject.svg;

    _jsdom2.default.env(svg, function (error, window) {
      if (error) {
        reject(error);
      } else {
        resolve(new _icon2.default(name, window.document.getElementsByTagName('svg')[0]));
      }
    });
  });
};

module.exports = svgToIcon;