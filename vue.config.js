const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'SISPAVE',
    themeColor: '#312f3a',
    msTileColor: '#312f3a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#312f3a'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
