const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    sales: "./src/odoo.js",
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "dashboard.[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
