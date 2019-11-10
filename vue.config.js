const path = require('path')

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "./src/sass/_base.sass"`
  //     }
  //   }
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, 'src/sass/*.sass'),
      ]
    }
  },
  // proxy: {
  //   '/api': { target: process.env.API_BASE_URL }
  // }
}
