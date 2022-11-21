
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
      animation: {
        "tracking-in-expand-fwd-bottom": "tracking-in-expand-fwd-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
      },
      keyframes: {
        "tracking-in-expand-fwd-bottom": {
            "0%": {
                "letter-spacing": "-.5em",
                transform: "translateZ(-700px) translateY(500px)",
                opacity: "0"
            },
            "40%": {
                opacity: ".6"
            },
            to: {
                transform: "translateZ(0) translateY(0)",
                opacity: "1"
            }
        }
      },
      visibility: ["container-hover"],
    },
  },
  important: true,
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    require('daisyui'),
  ]
}
