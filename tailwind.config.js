module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    colors: {
      'near-white': '#DBD8D4',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#302d2d',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        neuzeit: ['DINNeuzeitGroteskStd', 'sans-serif'],
        mono: ['Ubuntu Mono', 'sans-serif'],
      }
    }
  },
}
