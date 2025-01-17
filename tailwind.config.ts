import type { Config } from 'tailwindcss'
export default {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          '100': '#000000',
          '200': '#1D1D1D',
          '300': '#282828'
        },
        white: '#FFFFFF',
        grey: {
          '100': '#333333',
          '200': '#4F4F4F',
          '300': '#828282',
          '400': '#BDBDBD',
          '500': '#E0E0E0'
        },
        blue: '#2F80ED'
      },
      fontFamily: {
        'manrope': ['Manrope'],
      }
    }
  },
  plugins: [

  ],
} satisfies Config