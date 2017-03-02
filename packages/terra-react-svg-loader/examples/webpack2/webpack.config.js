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
        loaders: [
          'babel-loader',
          {
            loader: 'terra-react-svg-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
