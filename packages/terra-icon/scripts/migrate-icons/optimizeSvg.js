// eslint-disable-next-line import/no-extraneous-dependencies
const SVGO = require('svgo');
const svgoConfig = require('./svgoConfig');

const optimizeSvg = svgDataObject => new Promise((resolve, reject) => {
  const svgObject = svgDataObject;

  const config = svgoConfig(svgObject.isBidi, svgObject.isSpin);
  const svgo = new SVGO(config);

  svgo.optimize(svgObject.svg, (result) => {
    if (result.error) {
      reject(result.error);
    } else {
      svgObject.svg = result.data;
      resolve(svgObject);
    }
  });
});

module.exports = optimizeSvg;
