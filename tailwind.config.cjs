/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      'mobile-white-faded': 'rgba(0,0,0,0.03)',
      'off-white': '#f8f8f8',

      grey: {
        100: '#f7f7f7',
        200: '#efefef',
        300: '#c8c8c8',
        400: '#818080',
      },

      black: {
        100: '#383838',
        200: '#2d2d2d',
        300: '#181818',
        400: '#000000',
      },
      red: '#b44141',
      'red-form': '#e12d2d',
      green: '#557d56',
      'green-light': '#b5c3a7',
      'green-form': '#31B237',
      yellow: '#e4ae35',
      blueDark: '#144e62',
      blueLight: '#a5d0ef',
    },
    fontFamily: {
      heading: "'Amethysta', serif",
      body: "'Roboto', sans-serif",
    },

    extend: {
      boxShadow: {
        '3xl': '6px 6px 18px 0px rgb(0 0 0 / 30%)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      screens: {
        'table-scroll': '820px',
      },
    },
  },
  plugins: [],
};
