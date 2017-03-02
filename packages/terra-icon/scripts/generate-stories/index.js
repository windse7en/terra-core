/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const upperFirst = require('lodash').upperFirst;
/* eslint-enable import/no-extraneous-dependencies */

const iconFolders = ['Static', 'Themeable'];


iconFolders.forEach((iconFolder) => {
  const outputfile = fs.createWriteStream(`examples/Icon${iconFolder}.jsx`, { flags: 'w' });
  fs.readdir(`src/icon/${iconFolder}/`, (err, files) => {
    const icons = files.map((file) => {
      const obj = {
        component: `${upperFirst(file).slice(0, -4).replace(/-|_|\s/g, '')}Icon`,
        filepath: `../src/icon/${iconFolder}/${file}`,
      };

      return obj;
    });

    outputfile.write(`import React from 'react';${'\n\n'}`);

    icons.forEach((icon) => {
      outputfile.write(`import ${icon.component} from '${icon.filepath}';${'\n'}`);
    });

    outputfile.write(`\nconst ${upperFirst(iconFolder)}ColorIcon = () => (${'\n'}`);
    outputfile.write(`  <div>${'\n'}`);
    icons.forEach((icon) => {
      outputfile.write(`    <${icon.component} />${'\n'}`);
    });
    outputfile.write(`  </div>${'\n'}`);
    outputfile.write(`);${'\n\n'}`);
    outputfile.write(`export default ${upperFirst(iconFolder)}ColorIcon;${'\n'}`);

  });
  /* eslint-disable no-console */
  console.log(`Created examples/${iconFolder}.jsx`);
  /* eslint-enable no-console */
});
