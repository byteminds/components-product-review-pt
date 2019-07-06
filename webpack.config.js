var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

const nodeExternals = require("webpack-node-externals");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  //target: "node",
  //externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
