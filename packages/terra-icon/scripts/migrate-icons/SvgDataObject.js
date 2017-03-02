class SvgDataObject {
  constructor(name, filepath, themeable, bidi) {
    this.name = name;
    this.srcFilepath = `node_modules/cerner-one-icons/${filepath}`;
    this.destFilepath = `src/icon/${themeable ? 'themeable' : 'static'}/${name}.svg`;
    this.isBidi = (bidi === 'bi-directional');
    this.isSpin = (name === 'spinner');
  }
}

module.exports = SvgDataObject;
