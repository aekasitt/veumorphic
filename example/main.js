import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);
let router = new VueRouter({routes});

import Veumorphic from 'veumorphic';
Veumorphic.install(Vue);

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');