'use strict';

var _svgToIcon = require('./svgToIcon');

var _svgToIcon2 = _interopRequireDefault(_svgToIcon);

var _optimizeSvg = require('./optimizeSvg');

var _optimizeSvg2 = _interopRequireDefault(_optimizeSvg);

var _generateJsx = require('./generateJsx');

var _generateJsx2 = _interopRequireDefault(_generateJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (source) {
  this.cacheable();
  var callback = this.async();

  (0, _optimizeSvg2.default)(this.resourcePath, source).then(_svgToIcon2.default).then(_generateJsx2.default).then(function (jsx) {
    return callback(null, jsx);
  }).catch(console.error);
};