const config = require('./src/config')
const generators = require('./src/generators')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

exports.config = config
exports.generateComponents = generators.generateComponents
exports.generateUtilities = generators.generateUtilities
