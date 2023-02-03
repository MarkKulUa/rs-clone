const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.join(__dirname, "src/index.ts"),
  },
  output: {
    publicPath: "./",
    path: path.join(__dirname, "build"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/**",
          to: "[name][ext]",
          noErrorOnMissing: true,
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
