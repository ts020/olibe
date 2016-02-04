var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      "./index":"./src/index.js"
  },
  output: {
    path: './',
    filename: "[name].js",
    library: ["olibe"],
    libraryTarget: "commonjs"
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};

