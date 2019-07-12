const config = require('./config')
const generators = require('./generators')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

exports.config = config
exports.generateComponents = generators.generateComponents
exports.generateUtilities = generators.generateUtilities
