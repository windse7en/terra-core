/**
 * SvgObject - Object that stores an SVG and its name
 * @param {string} name of SVG
 * @param {string} svg element as a string
 */
class SvgObject {
  constructor(name, svg) {
    this.name = name;
    this.svg = svg;
  }
}

export default SvgObject;
