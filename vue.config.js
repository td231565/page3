module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/page3/' : '/',
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        './sass/variables.sass',
        './sass/base.sass',
        './sass/elements.sass'
      ],
      // patterns: [
      //   'D:\\Documents\\page3\\src\\sass\\variables.sass',
      //   'D:\\Documents\\page3\\src\\sass\\base.sass',
      //   'D:\\Documents\\page3\\src\\sass\\elements.sass'
      // ],
      preProcessor: 'sass'
    }
  }
}
