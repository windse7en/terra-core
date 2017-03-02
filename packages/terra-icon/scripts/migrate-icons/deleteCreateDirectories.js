// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

const deleteCreateDirectories = () => {
  const destinationDirectory = 'src/icon/';

  // Delete destination directory
  shell.rm('-rf', destinationDirectory);

  // Create destination directories
  shell.mkdir(destinationDirectory);
  shell.mkdir(`${destinationDirectory}static/`);
  shell.mkdir(`${destinationDirectory}themeable/`);
};

module.exports = deleteCreateDirectories;
