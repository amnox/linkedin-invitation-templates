var path = require('path');

module.exports = {
  entry: './background.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  },
  resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
  }
}
};

