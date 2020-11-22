module.exports = {
  components: '{component,uncontrolled,part}/*/*.vue',
  outDir: 'docs',
  apiOptions: { ...require('./webpack.config').resolve }
}
