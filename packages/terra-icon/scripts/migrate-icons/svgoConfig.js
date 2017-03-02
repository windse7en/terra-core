const classNames = require('classnames');

const svgoConfig = (isBidi, isSpin) => {
  const classes = classNames({ 'terra-Icon': true }, { 'terra-Icon--spin': isSpin }, { 'is-bidi': isBidi });

  return {
    floatPrecision: 2,
    plugins: [
      {
        mergePaths: false,
      },
      {
        removeTitle: true,
      },
      {
        addAttributesToSVGElement: {
          attribute: 'aria-hidden="true"',
        },
      },
      {
        addClassesToSVGElement: {
          className: classes,
        },
      },
    ],
  };
};

module.exports = svgoConfig;
