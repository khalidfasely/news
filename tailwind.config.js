/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '8rem',
      },
    },
    extend: {
      backgroundImage: {
        'bg-story': "url('/img/Story.jpg')",
      },
      colors: {
        primary: '#021b9c',
        'primary-dark': '#021679',
        'primary-light': '#0324C9',
      },
      lineHeight: {
        12: '3rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'pt-serif': ['PT Serif', 'serif'],
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('children', '& > *');
    },
  ],
};