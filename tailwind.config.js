module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        appear: 'appear 0.2s ease-in-out',
      },
      inset: {
        18: '72px'
      },
      screens: {
        'movile': '0px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
            display: 'none',
          },
          '100%': {
            opacity: '1',
            display: 'block',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
