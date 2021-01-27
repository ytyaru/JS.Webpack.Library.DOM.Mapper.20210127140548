module.exports = {
  mode: "production",
  entry: "./src/DomMapper.js",
  output: {
    library: 'DomMapper',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
//    library: 'DomMapper',
//    libraryExport: 'default',
//    libraryTarget: 'var',
    filename: 'DomMapper.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-private-methods",
                // asyncを使えるようにする
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向け
  target: ["web", "es5"],
};

