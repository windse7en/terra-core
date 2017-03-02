// eslint-disable-next-line import/no-extraneous-dependencies
import SVGO from 'svgo';
import path from 'path';
import svgoConfig from './svgoConfig';
import SvgObject from './svgObject';

/**
 * optimizeSvg- Uses svgo to clean up SVG
 * @param {string} resourcePath where the svg is located
 * @param {string} svgString SVG and its children
 */
const optimizeSvg = (resourcePath, svgString) => new Promise((resolve, reject) => {
  const svgo = new SVGO(svgoConfig);
  const name = path.parse(resourcePath).name;

  svgo.optimize(svgString, (result) => {
    if (result.error) {
      reject(result.error);
    } else {
      resolve(new SvgObject(name, result.data));
    }
  });
});

export default optimizeSvg;
