// src/index.js

import VeuButton from './components/VeuButton.vue';
import VeuInput from './components/VeuInput.vue';
import VeuNavbar from './components/VeuNavbar.vue';
import VeuPane from './components/VeuPane.vue';

/* Can be installed individually as `Vue.component("component-name", Component) */
export { 
  VeuButton,
  VeuInput,
  VeuNavbar,
  VeuPane
};

/* Bundle installation by Veumorphic.install(Vue) */
export default {
  install ( Vue ) {
    Vue.component('VeuButton', VeuButton);
    Vue.component('VeuInput', VeuInput);
    Vue.component('VeuNavbar', VeuNavbar);
    Vue.component('VeuPane', VeuPane);
  }
}