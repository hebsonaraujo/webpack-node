// webpack.config.js
const path = require("path");

let libraryName = 'PacktDataStructuresAlgorithms';
let outPutFile =  `${libraryName}.js`
let pathToLib = './src/data-structures/index.ts'

module.exports = {
  entry: pathToLib,
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "applications"),
    port: 8080,
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "applications"),
    filename: outPutFile,
    library: libraryName,
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
};
