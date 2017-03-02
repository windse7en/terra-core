"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SvgObject - Object that stores an SVG and its name
 * @param {string} name of SVG
 * @param {string} svg element as a string
 */
var SvgObject = function SvgObject(name, svg) {
  _classCallCheck(this, SvgObject);

  this.name = name;
  this.svg = svg;
};

exports.default = SvgObject;