module.exports = {
    /*
  presets: [
    "@babel/preset-env",
  ],
  "plugins:": [
    "@babel/plugin-proposal-private-methods"
  ],
    */
  "presets": ["@babel/preset-env"],
  "env": {
    "production": {
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-private-methods",
      ]
    }
  }
};

