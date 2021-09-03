// example/vite.config.js

const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path');
module.exports = {
  plugins: [createVuePlugin(/*options*/)],
  resolve: {
    alias: {
      'veumorphic': path.resolve(__dirname, '..', 'src')
    }
  }
};