'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _template = require('lodash/template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templatePath = _path2.default.join(__dirname, './template.txt');

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
var generateJsx = function generateJsx(icon) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(templatePath, 'utf-8', function (error, text) {
      if (error) {
        reject(error);
      } else {
        var compiled = (0, _template2.default)(text);
        resolve(compiled({ icon: icon }));
      }
    });
  });
};

exports.default = generateJsx;