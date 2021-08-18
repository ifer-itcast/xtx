const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 自动引入哪些文件
      patterns: [path.join(__dirname, 'src/assets/styles/variables.less'), path.join(__dirname, 'src/assets/styles/mixins.less')]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10000 }))
  }
}
