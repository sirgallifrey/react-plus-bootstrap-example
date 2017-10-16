const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      { test: /\.(jpg|gif|png|mp4)$/, use: [{ loader: 'file-loader' }] },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    extractSass,
  ],
  devServer: {
    host: '0.0.0.0',
    port: '3000'
  }
};
