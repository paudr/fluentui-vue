module.exports = {
  stories: ['../component/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  core: { builder: 'webpack5' },
  webpackFinal (config) {
    const cssRule = config.module.rules.find(rule => rule.test.toString() === '/\\.css$/')
    console.log(cssRule)
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false
          }
        },
        'less-loader'
      ]
    })
    return config
  }
}