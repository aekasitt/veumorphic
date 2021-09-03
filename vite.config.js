// vite.config.js
const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path');

module.exports = {
  plugins: [createVuePlugin(/*options*/)],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.js'),
      name: 'veumorphic',
      filename: format => `veumorphic.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}