const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const outputPath = path.join(__dirname, "dist");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pathsToClean = ["dist"];
const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: [],
};

const optionsDevServer = {
  historyFallback: true,
  port: 9000,
  open: true,
  host: "localhost",
  static: outputPath,
  progress: false,
};

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: outputPath,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "",
          name: "images/[hash]-[name].[ext]",
        },
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {},
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new Serve(optionsDevServer),
    new CleanWebpackPlugin(),
  ],
  watch: true,
};
