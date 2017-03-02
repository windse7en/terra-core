// eslint-disable-next-line import/no-extraneous-dependencies
const csv = require('csvtojson');
const SvgDataObject = require('./SvgDataObject');
const readSvgFile = require('./readSvgFile');
const optimizeSvg = require('./optimizeSvg');
const writeSvgFile = require('./writeSvgFile');
const deleteCreateDirectories = require('./deleteCreateDirectories');

const iconCsvFile = 'src/cerner-one-icons.csv';
const csvFileHeaders = ['name', 'filepath', 'themeable', 'bidi'];

deleteCreateDirectories();

csv({ noheader: true, headers: csvFileHeaders }).fromFile(iconCsvFile).on('json', (jsonObj) => {
  const svg = new SvgDataObject(jsonObj.name, jsonObj.filepath, jsonObj.themeable, jsonObj.bidi);

  readSvgFile(svg)
    .then(optimizeSvg)
    .then(writeSvgFile)
    // eslint-disable-next-line no-console
    .catch(console.error);
});
