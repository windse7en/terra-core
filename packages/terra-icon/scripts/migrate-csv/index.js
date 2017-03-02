/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const shell = require('shelljs');
/* eslint-enable import/no-extraneous-dependencies */

const cernerOneIconsCsvFile = 'node_modules/cerner-one-icons/src/CernerOneIcons-CSV.csv';
const destinationCsvFile = 'src/cerner-one-icons.csv';

shell.rm('-rf', destinationCsvFile);
fs.createReadStream(cernerOneIconsCsvFile).pipe(fs.createWriteStream(destinationCsvFile));
