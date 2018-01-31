const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const styleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              'css-loader?sourceMap',
              'sass-loader'
            ]
          })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("styles.css"),
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    })
  ]
}