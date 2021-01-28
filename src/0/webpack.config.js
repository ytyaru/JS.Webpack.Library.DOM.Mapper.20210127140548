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
                ["@babel/preset-env", {
                    useBuiltIns: "usage",
                    corejs: 3,
//                    modules: 'false',//commonjs,amd,umd,systemjs,auto
                    modules: 'umd',//commonjs,amd,umd,systemjs,auto
                }]
              ],
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-private-methods",
                // asyncを使えるようにする
//                "@babel/plugin-transform-runtime",
                ["@babel/plugin-transform-runtime",{
                    corejs: 3,
                    regenerator: true,   
                }],
                // yieldを使えるようにする
                "@babel/plugin-transform-regenerator",
              ],
              /*
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-private-methods",
                // asyncを使えるようにする
                "@babel/plugin-transform-runtime",
                // yieldを使えるようにする
                "@babel/plugin-transform-regenerator",
              ],
              */
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向け
  target: ["web", "es5"],
};

