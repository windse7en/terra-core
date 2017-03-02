import jsdom from 'jsdom';
import Icon from './icon';

/**
 * svgToIcon - Takes an svgObject and returns it as an Icon object
 * @param {object} svgObject object with svg string and name
 */
const svgToIcon = svgObject => new Promise((resolve, reject) => {
  const name = svgObject.name;
  const svg = svgObject.svg;

  jsdom.env(svg, (error, window) => {
    if (error) {
      reject(error);
    } else {
      resolve(new Icon(name, window.document.getElementsByTagName('svg')[0]));
    }
  });
});

module.exports = svgToIcon;
