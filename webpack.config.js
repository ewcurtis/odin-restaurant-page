const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  
  entry: './src/index.js',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Odin Restaurant Page',
    }),
  ],

  devtool: 'inline-source-map',

  output: {
    filename: 'main.js',
    publicpath: '',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

};