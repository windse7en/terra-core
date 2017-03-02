const fs = require('fs');

const readSvgFile = svgDataObject => new Promise((resolve, reject) => {
  const svgObject = svgDataObject;

  fs.readFile(svgObject.srcFilepath, 'utf-8', (error, svg) => {
    if (error) {
      reject(error);
    } else {
      svgObject.svg = svg;
      resolve(svgObject);
    }
  });
});

module.exports = readSvgFile;
