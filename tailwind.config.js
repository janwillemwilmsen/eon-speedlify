module.exports = {
  // mode: 'jit',
  purge: {
      content: [
        './**/*.js',
        './**/*.11ty.js',
        './**/*.njk',
        './*.njk'
      ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    typography: (theme) => ({
      default: {
          css: {
              color: theme('colors.gray.900'),

              a: {
                  color: theme('colors.blue.500'),
                  '&:hover': {
                      color: theme('colors.blue.700'),
                  },
              },
          },
      },

      dark: {
          css: {
              color: theme('colors.gray.100'),

              a: {
                  color: theme('colors.blue.100'),
                  '&:hover': {
                      color: theme('colors.blue.100'),
                  },
              },
          },
      },
  }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
