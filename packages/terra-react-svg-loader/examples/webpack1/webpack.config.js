module.exports = {
  entry: './index.js',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'babel!terra-react-svg-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};
