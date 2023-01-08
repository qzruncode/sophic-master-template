const cachewebWebpackPlugin = require('sophic-sw-webpack-plugin');
module.exports = [
  new cachewebWebpackPlugin({
    expirationHour: 2
  }),
];