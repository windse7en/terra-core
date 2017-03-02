'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svgo = require('svgo');

var _svgo2 = _interopRequireDefault(_svgo);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _svgoConfig = require('./svgoConfig');

var _svgoConfig2 = _interopRequireDefault(_svgoConfig);

var _svgObject = require('./svgObject');

var _svgObject2 = _interopRequireDefault(_svgObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * optimizeSvg- Uses svgo to clean up SVG
 * @param {string} resourcePath where the svg is located
 * @param {string} svgString SVG and its children
 */
// eslint-disable-next-line import/no-extraneous-dependencies
var optimizeSvg = function optimizeSvg(resourcePath, svgString) {
  return new Promise(function (resolve, reject) {
    var svgo = new _svgo2.default(_svgoConfig2.default);
    var name = _path2.default.parse(resourcePath).name;

    svgo.optimize(svgString, function (result) {
      if (result.error) {
        reject(result.error);
      } else {
        resolve(new _svgObject2.default(name, result.data));
      }
    });
  });
};

exports.default = optimizeSvg;