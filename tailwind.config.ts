import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glassy':
          'linear-gradient(90deg,rgba(86,120,191) 40%,rgba(86,120,191) 100%)',
        'gradient-glassy-nontransparent':
          'linear-gradient(90deg,rgba(47,88,176,0.05) 40%,rgba(47,88,176,0.05) 100%)',
      },
      padding: {
        4.5: '18px',
        15: '60px',
        18: '72px',
        30: '120px',
      },
      colors: {
        primary: {
          900: '#2F58B0',
          600: '#061C3D',
        },
        secondary: {
          900: '#4A4A4A',
          800: '#242424',
          700: '#838E9E',
          500: '#626161',
          200: '#E6E8EC',
          100: "#F5F5F5"
        },
        green: {
          900: '#2FB034',
        },
        violet: {
          900: '#B02FA3',
        },
        orange: {
          900: '#B0A32F',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      data: {
        true: 'true="true"',
        active: 'active="true"',
      },
    },
  },
  plugins: [],
};
export default config;
