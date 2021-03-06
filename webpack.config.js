var path = require('path');
var SRC_DIR = path.join(__dirname, '/your-code-goes-here/src');
var DIST_DIR = path.join(__dirname, '/your-code-goes-here/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff2|woff|ttf|svg|eot)$/,
        loader: 'file-loader'
      }
    ]
  }
};
