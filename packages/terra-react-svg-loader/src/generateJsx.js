import fs from 'fs';
import path from 'path';
import template from 'lodash/template';

const templatePath = path.join(__dirname, './template.txt');

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
const generateJsx = icon => new Promise((resolve, reject) => {
  fs.readFile(templatePath, 'utf-8', (error, text) => {
    if (error) {
      reject(error);
    } else {
      const compiled = template(text);
      resolve(compiled({ icon }));
    }
  });
});

export default generateJsx;
