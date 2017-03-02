const fs = require('fs');

const writeSvgFile = svgDataObject => new Promise((resolve, reject) => {
  fs.writeFile(svgDataObject.destFilepath, svgDataObject.svg, 'utf-8', (error) => {
    if (error) {
      reject(error);
    } else {
      // eslint-disable-next-line no-console
      resolve(console.log(`Created ${svgDataObject.destFilepath}`));
    }
  });
});

module.exports = writeSvgFile;
