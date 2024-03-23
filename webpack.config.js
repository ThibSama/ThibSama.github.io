const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    carrousel: "/public/js/carrousel.js",
    date: "/public/js/date.js",
    etudes: "/public/js/etudes.js",
    veille: "/public/js/veille.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/css",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
