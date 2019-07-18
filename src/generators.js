const config = require('./config')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(input, plugin, options, userConfig) {
  return postcss(tailwindcss(config(plugin, options, userConfig))).process(input, {
    from: undefined,
  })
}

module.exports = {
  generateComponents: function(plugin, options, userConfig) {
    return run('@tailwind components;', plugin, options, userConfig)
  },

  generateUtilities: function (plugin, options, userConfig) {
    return run('@tailwind utilities;', plugin, options, userConfig)
  }
}
