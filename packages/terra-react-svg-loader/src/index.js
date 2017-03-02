import svgToIcon from './svgToIcon';
import optimizeSvg from './optimizeSvg';
import generateJsx from './generateJsx';


module.exports = function (source) {
  this.cacheable();
  const callback = this.async();

  optimizeSvg(this.resourcePath, source)
    .then(svgToIcon)
    .then(generateJsx)
    .then(jsx => callback(null, jsx))
    .catch(console.error);
};
