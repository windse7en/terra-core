/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const upperFirst = require('lodash').upperFirst;
/* eslint-enable import/no-extraneous-dependencies */

const iconFolders = ['static', 'themeable'];


iconFolders.forEach((iconFolder) => {
  const outputfile = fs.createWriteStream(`stories/${iconFolder}.jsx`, { flags: 'w' });
  fs.readdir(`src/icon/${iconFolder}/`, (err, files) => {
    const icons = files.map((file) => {
      const obj = {
        component: `${upperFirst(file).slice(0, -4).replace(/-|_|\s/g, '')}Icon`,
        filepath: `../src/icon/${iconFolder}/${file}`,
      };

      return obj;
    });

    outputfile.write(`/* eslint-disable import/no-extraneous-dependencies */${'\n'}`);
    outputfile.write(`import React from 'react';${'\n'}`);
    outputfile.write(`import { storiesOf } from '@kadira/storybook';${'\n'}`);
    outputfile.write(`/* eslint-enable import/no-extraneous-dependencies */${'\n\n'}`);


    icons.forEach((icon) => {
      outputfile.write(`import ${icon.component} from '${icon.filepath}';${'\n'}`);
    });

    outputfile.write(`\nstoriesOf('${upperFirst(iconFolder)} Color Icons', module)${'\n'}`);

    icons.forEach((icon) => {
      outputfile.write(`  .add('${icon.component}', () => <${icon.component} />)${'\n'}`);
    });
    outputfile.write(`;${'\n'}`);

    outputfile.write(`storiesOf('All ${upperFirst(iconFolder)} Color Icons', module)${'\n'}`);
    outputfile.write(`.add('All ${upperFirst(iconFolder)}', () => <div>`);
    icons.forEach((icon) => {
      outputfile.write(`<${icon.component} />`);
    });
    outputfile.write(`</div>);${'\n'}`);
  });
  /* eslint-disable no-console */
  console.log(`Created stories/${iconFolder}.jsx`);
  /* eslint-enable no-console */
});
