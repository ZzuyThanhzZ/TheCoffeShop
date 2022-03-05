module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2D635E",
        primaryPink: "#FAE9E0",
        lightGreen: "#E3EBE7",
        lightGray: '#f4f7f5',
        darkGray: "#444A4A",
      },
      fontFamily: {
        'josefin': 'Josefin Sans',
        'cedarville': 'Cedarville Cursive',
        'alegreya': 'Alegreya Sans',
      },
      padding: {
        'bothsides': '120px',
      },
      boxShadow: {
        'shadowBtn': '0px 7px 10px rgba(0, 0, 0, 0.1)',
        'shadowSliderOp1': '0px 23px 34px rgba(35, 57, 55, 0.17)',
        'shadowSliderOp2': '0px 7px 34px rgba(35, 57, 55, 0.25)',
        'shadowFooterBtn': '0px 4px 10px rgba(0, 0, 0, 0.17)',
      },
      keyframes: {
        showIn: {
          '0%': { transform:'scaleY(.005)', transform:'scaleX(0)'},
          '50%': {transform:'scaleY(.005)', transform: 'scaleX(1)'},
          '100%': {transform:'scaleY(1)', transform: 'scaleX(1)'}
        },
      },
      animation: {
        'showIn': 'showIn ease-in 1s',
      }
    }, 
  },
  plugins: [],
}
