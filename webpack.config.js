const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js/dist'),
  },
};
