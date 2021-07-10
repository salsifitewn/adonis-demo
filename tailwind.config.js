module.exports = {
  purge: {
    content: [
      './resources/views/**/*.edge',
      './resources/css/**/*.css',
      './resources/js/**/*.js',
      './resources/js/**/*.ts',
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
