const path = require('path');
const MyClean = require('./plugin/myClean');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    alias: {
      replaceLoader: path.join(__dirname, 'loader/replaceLoader.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.less/i,
        use: [
          {
            loader: path.join(__dirname, 'loader/styleLoader.js')
          },
          {
            loader: path.join(__dirname, 'loader/lessLoader.js')
          }
        ]
      }
    ]
  },
  plugins: [
    new MyClean()
  ]
}