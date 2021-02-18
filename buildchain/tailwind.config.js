// tailwind.config.js
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      '../cms/templates/**/*.{twig,html}',
    ],
    layers: [
      'base',
      'components',
      'utilities',
    ],
  },
  mode: 'layers',
  options: {
    whitelist: [
      '../src/css/components/**/*.{css}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      teal: colors.teal,
    },
    fontFamily: {
      title: ['Righteous', ...defaultTheme.fontFamily.sans],
      title2: ['Quicksand', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}