const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.min.js",
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
                {
                  useBuiltIns: "usage", // 低版本浏览器中只补充项目中使用到的ES6语法
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },

  devServer: {
    // 代理Webpack请求
    proxy: {
      "/web": "http://139.196.220.56:8069",
    },
    //使用 hotReload
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
