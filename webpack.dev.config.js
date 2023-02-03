const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.join(__dirname, "src/index.ts"),
  },
  output: {
    publicPath: "./",
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    devMiddleware: {
      writeToDisk: (filePath) => {
        return !/hot-update/i.test(filePath);
      },
    },
    port: 3001,
    open: true,
    hot: true,
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
        use: ["style-loader", "css-loader"],
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
