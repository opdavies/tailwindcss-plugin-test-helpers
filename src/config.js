const defaultConfig = require('tailwindcss/defaultConfig')
const merge = require('lodash/merge')

module.exports = function(plugin, pluginOptions, userConfig = {}) {
  const testConfig = {
    corePlugins: false,
    plugins: [plugin(pluginOptions)],
  }

  return merge({}, defaultConfig, testConfig, userConfig)
}
