import transfromChildren from './transformChildren';
import htmlToReactAttributes from './htmlToReactAttributes';

/**
 * Icon - Object that stores an SVG and its name
 * @param {string} name of SVG
 * @param {HTMLElement} node html node
 */
class Icon {
  constructor(name, node) {
    this.name = name;
    this.children = transfromChildren(node);
    this.attributes = Array.prototype.slice.call(node.attributes)
      .map(x => ({ name: htmlToReactAttributes(x.name), value: x.value }))
      .reduce((attrs, x) => Object.assign({ [x.name]: x.value }, attrs), {});
  }
}

export default Icon;
