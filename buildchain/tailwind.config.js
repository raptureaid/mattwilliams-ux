require('dotenv').config();

// Environment
const environment = process.env.ENVIRONMENT || 'development';

// tailwind.config.js
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: environment === 'production',
    content: [
      '../cms/templates/**/*.{twig,html}',
    ],
    layers: [
      'base',
      'components',
      'utilities',
    ],
    mode: 'layers',
    options: {
      whitelist: [
        '../src/css/components/**/*.{css}',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.lightBlue,
      gray: colors.blueGray,
      teal: colors.teal,
    },
    fontFamily: {
      title: ['Righteous', ...defaultTheme.fontFamily.sans],
      title2: ['Quicksand', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        '6xl': '3.5rem',
        '7xl': '3.75rem',
        '8xl': '4.5rem',
        '9xl': '6rem',
        '10xl': '8rem', 
      }
    },
  },
  variants: {},
  plugins: [],
}