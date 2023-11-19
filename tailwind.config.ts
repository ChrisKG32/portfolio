import * as colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

export default {
  purge: ['./app/**/*.{ts,tsx}'],
  content: ['./app/**/*.{ts,tsx}'],
  mode: 'jit',
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      brightness: {
        30: '0.3',
        40: '0.4',
      },
      transitionDelay: {
        400: '400ms',
        600: '400ms',
        800: '800ms',
        900: '900ms',
        1200: '1200ms',
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
      },
      height: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '42rem',
        176: '46rem',
      },
      width: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '42rem',
        176: '46rem',
      },
      minHeight: {
        16: '4rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        72: '18rem',
        96: '24rem',
        99: '24.75rem',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '2/3': '66.66%',
        '3/4': '75%',
        '4/5': '80%',
      },
    },
    colors: {
      ...colors,
      neutral: {
        ...colors.neutral,
        350: '#BCBCBC',
        450: '#8B8B8B',
        650: '#494949',
        750: '#333333',
        850: '#1F1F1F',
      },
      primaryLight: '#f8afa0',
      primary: '#f26c50',
      primaryDark: '#be2c0e',
      bgPrimaryDark: colors.neutral[900],
      bgPrimary: '#1F1F1F',
      bgPrimaryLight: colors.neutral[800],
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
