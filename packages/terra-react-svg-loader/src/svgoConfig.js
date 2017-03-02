/**
 * svgoConfig - Configuration object for svgo
 */
const svgoConfig = {
  multipass: true,
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
        className: 'terra-Icon',
      },
    },
  ],
};

export default svgoConfig;
