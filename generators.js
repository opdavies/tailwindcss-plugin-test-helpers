const config = require('./config')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(input, plugin, options) {
  return postcss(tailwindcss(config(plugin, options))).process(input, {
    from: undefined,
  })
}

module.exports = {
  generateComponents: function generateUtilities(plugin, options) {
    return run('@tailwind components;', plugin, options)
  },

  generateUtilities: function (plugin, options) {
    return run('@tailwind utilities;', plugin, options)
  }
}
