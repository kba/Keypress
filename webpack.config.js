const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./keypress.coffee",
  output: {
    path: __dirname + "/dist",
    filename: "keypress.min.js",
    libraryTarget: "umd",
    library: "keypress"
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loader: "coffee-loader"},
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6
      }
    })
  ]
}
