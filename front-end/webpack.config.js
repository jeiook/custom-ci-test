const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    header: './src/header.js',
    footer: './src/footer.js',
    home: './src/home.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../static',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Front-end',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../static'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};