import Vue from 'vue';
// import { createApp, h } from 'vue';
import App from './App.vue';

// createApp({ render: () => h(App) }).mount('#app');
new Vue({
  el: '#app',
  render: (h) => h(App)
});