const path = require("path");

module.exports = {
  entry: {
    sale: "./src/sale/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../content"),
    filename: "dashboard_[name]_content.js",
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
                "@babel/preset-env", // 将ES6语法转成ES5
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
};
