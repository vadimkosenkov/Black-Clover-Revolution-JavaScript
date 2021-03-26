const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
require("babel-register");

const config = {
  entry: "./js/init.js",

  output: {
    path: path.resolve(__dirname, "./hosting/public"),
    filename: "ddr.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

module.exports = config;
