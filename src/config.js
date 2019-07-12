const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = function(plugin, pluginOptions, config = defaultConfig) {
  return {
    ...config,
    corePlugins: false,
    plugins: [plugin(pluginOptions)],
  }
}
