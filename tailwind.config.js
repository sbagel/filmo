
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    },
    extend: {
      colors: {
        eerie: '#0e0b15',
        placeholder: '#9da2ae',
        raisin: '#312A35ff',
        dash: '#1d1c21',
        peachin: '#4d2e27',
        grey: '#5B595Aff',
        milk: '#F6F6F5ff',
        cornflower: '#499bf8',
      },
      keyframes: {
        animIn: {
          '100%': {
            opacity: '0%',
            bordeRadius: '0',
            width: "600px",
            height: '600px',
          },
          '0%': {
            width: '0px',
            height: '0px',
            bordeRadius: '100%',
            opacity: '20%',
          },
        },
      },
      visibility: ["container-hover"],
    },
  },
  important: true,
  variants: {},
  plugins: [
    require('daisyui'),
  ]
}
