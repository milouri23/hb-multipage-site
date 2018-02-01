const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: ['standard-loader'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.pug/,
        use: ['pug-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
  ]
}